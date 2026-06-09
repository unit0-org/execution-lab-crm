import { NextResponse } from 'next/server'

// Signed-in visitors hitting the public landing go to their dashboard.
export function homeRedirect(request) {
  const url = request.nextUrl.clone()
  url.pathname = '/dashboard'

  return NextResponse.redirect(url)
}

// Unauthenticated visitors to a gated route are sent to sign in.
export function loginRedirect(request, pathname) {
  const url = request.nextUrl.clone()
  url.pathname = '/login'
  url.searchParams.set('next', pathname)

  return NextResponse.redirect(url)
}
