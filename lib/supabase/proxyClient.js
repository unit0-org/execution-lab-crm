import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { authCookieOptions } from './authCookieOptions'

// Wraps createServerClient with the cookie plumbing the proxy needs.
// Returns { supabase, getResponse } — call getResponse() to obtain the
// final response with refreshed Set-Cookie headers.
export function makeProxyClient(request) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookieOptions: authCookieOptions(),
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (all) => {
          all.forEach((c) => request.cookies.set(c.name, c.value))
          response = NextResponse.next({ request })
          all.forEach((c) => response.cookies.set(c.name, c.value, c.options))
        }
      }
    }
  )

  return { supabase, getResponse: () => response }
}
