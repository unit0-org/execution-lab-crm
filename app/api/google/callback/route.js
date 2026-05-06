import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { exchangeCode, fetchUserInfo, siteOrigin } from '@/lib/google'

export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const oauthError = url.searchParams.get('error')

  const cookieStore = await cookies()
  const expectedState = cookieStore.get('google_oauth_state')?.value
  cookieStore.delete('google_oauth_state')

  if (oauthError) {
    return redirectWithError(url, `Google: ${oauthError}`)
  }
  if (!code || !state || state !== expectedState) {
    return redirectWithError(url, 'Invalid OAuth state')
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect(new URL('/login', url.origin))

  try {
    const h = await headers()
    const origin = siteOrigin(h)

    const tokens = await exchangeCode({ origin, code })
    const info = await fetchUserInfo(tokens.access_token)

    // Upsert by email so reconnecting the same Gmail just refreshes tokens.
    const { error } = await supabase
      .from('google_accounts')
      .upsert(
        {
          email: info.email,
          label: info.name || null,
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token || null,
          last_synced_at: null,
        },
        { onConflict: 'email' },
      )

    if (error) return redirectWithError(url, error.message)

    return NextResponse.redirect(new URL('/contacts?connected=1', url.origin))
  } catch (err) {
    return redirectWithError(url, err.message)
  }
}

function redirectWithError(url, message) {
  return NextResponse.redirect(
    new URL(`/contacts?error=${encodeURIComponent(message)}`, url.origin),
  )
}
