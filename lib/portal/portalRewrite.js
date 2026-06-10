import { NextResponse } from 'next/server'

// Rewrite a portal-host request to the /portal route tree, preserving
// the original pathname (so "/register/x" serves "/portal/register/x").
export function portalRewrite(request) {
  const url = request.nextUrl.clone()

  url.pathname = `/portal${url.pathname}`

  return NextResponse.rewrite(url)
}
