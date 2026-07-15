import { NextResponse } from 'next/server'
import { makeProxyClient } from '@/lib/supabase/proxyClient'

// Build the /portal-prefixed rewrite for a portal-host request, preserving
// the original pathname (so "/register/x" serves "/portal/register/x").
const toPortalTree = (request) => {
  const url = request.nextUrl.clone()

  url.pathname = `/portal${url.pathname}`

  return NextResponse.rewrite(url, { request })
}

// Rewrite a portal-host request to the /portal tree AND refresh the
// Supabase session cookies, so a member's session persists on the portal
// host instead of dying when the access token expires (which forced a new
// magic link every visit).
export async function portalRewrite(request) {
  const { supabase, getResponse } = makeProxyClient(request, toPortalTree)
  await supabase.auth.getUser()

  return getResponse()
}
