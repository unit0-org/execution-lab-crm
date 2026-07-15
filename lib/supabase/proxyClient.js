import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { authCookieOptions } from './authCookieOptions'

const passThrough = (request) => NextResponse.next({ request })

// Wraps createServerClient with the cookie plumbing the proxy needs.
// `buildResponse` makes the response the refreshed cookies ride on — a
// pass-through by default, or a rewrite for the portal host — so the
// session persists whichever way the proxy answers the request. Returns
// { supabase, getResponse }; call getResponse() for the final response
// with refreshed Set-Cookie headers.
export function makeProxyClient(request, buildResponse = passThrough) {
  let response = buildResponse(request)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookieOptions: authCookieOptions(),
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (all) => {
          all.forEach((c) => request.cookies.set(c.name, c.value))
          response = buildResponse(request)
          all.forEach((c) => response.cookies.set(c.name, c.value, c.options))
        }
      }
    }
  )

  return { supabase, getResponse: () => response }
}
