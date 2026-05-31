import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const back = (url, to) => NextResponse.redirect(new URL(to, url.origin))

const errUrl = (error) =>
  `/login?error=${encodeURIComponent(error.message)}`

const finish = (supabase, code, url, next) =>
  supabase.auth.exchangeCodeForSession(code).then(({ error }) =>
    back(url, error ? errUrl(error) : next),
  )

// Supabase Auth OAuth callback (PKCE).
export function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') || '/'
  if (!code) return back(url, '/login?error=missing_code')
  return createClient().then((s) => finish(s, code, url, next))
}
