import { NextResponse } from 'next/server'

export function redirectToContacts(origin, params = {}) {
  const search = new URLSearchParams(params).toString()
  const path = search ? `/contacts?${search}` : '/contacts'
  return NextResponse.redirect(new URL(path, origin))
}

export const redirectWithError = (origin, message) =>
  redirectToContacts(origin, { error: message })
