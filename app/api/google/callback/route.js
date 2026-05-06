import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { exchangeCode } from '@/lib/google/tokens'
import { fetchUserInfo } from '@/lib/google/userinfo'
import { siteOrigin } from '@/lib/google/origin'
import { upsertGoogleAccount } from '@/lib/google/storeAccount'
import { redirectWithError } from '@/lib/google/redirects'
import { validateCallback } from './_validate'

export async function GET(request) {
  const url = new URL(request.url)
  const v = await validateCallback(url)
  if (!v.ok) return redirectWithError(url.origin, v.error)

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect(new URL('/login', url.origin))

  try {
    const origin = siteOrigin(await headers())
    const tokens = await exchangeCode({ origin, code: v.code })
    const info = await fetchUserInfo(tokens.access_token)
    const error = await upsertGoogleAccount(supabase, { tokens, info })
    if (error) return redirectWithError(url.origin, error.message)
    return NextResponse.redirect(new URL('/contacts?connected=1', url.origin))
  } catch (err) {
    return redirectWithError(url.origin, err.message)
  }
}
