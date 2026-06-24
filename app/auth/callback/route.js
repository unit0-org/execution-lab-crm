import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { afterSession } from '../afterSession'
import { safeNextPath } from '@/lib/auth/safeNextPath'

const back = (url, to) => NextResponse.redirect(new URL(to, url.origin))

const errUrl = (error) =>
  `/login?error=${encodeURIComponent(error.message)}`

// Supabase Auth OAuth callback (PKCE).
export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = safeNextPath(url.searchParams.get('next'))
  const isPortal = url.searchParams.get('flow') === 'portal'

  if (!code) return back(url, '/login?error=missing_code')

  const supabase = await createClient()
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) return back(url, errUrl(error))

  await afterSession(data.session, isPortal)

  return back(url, next)
}
