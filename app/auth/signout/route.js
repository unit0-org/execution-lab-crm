import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const safe = (next) =>
  next && next.startsWith('/') && !next.startsWith('//') &&
  !next.startsWith('/\\') ? next : '/login'

// Sign out, then return to a safe same-origin `next` (members land back on
// the portal); staff with no `next` land on the login page.
const destination = (request) => {
  const next = new URL(request.url).searchParams.get('next')

  return new URL(safe(next), request.url)
}

export async function POST(request) {
  const supabase = await createClient()
  await supabase.auth.signOut()

  return NextResponse.redirect(destination(request), { status: 303 })
}
