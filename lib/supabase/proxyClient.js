import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

// Wraps createServerClient with the cookie plumbing the proxy needs.
// Returns { supabase, getResponse } — call getResponse() to obtain the
// final response with refreshed Set-Cookie headers.
export function makeProxyClient(request) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  return { supabase, getResponse: () => response }
}
