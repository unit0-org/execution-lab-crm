import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const toLogin = (request) =>
  NextResponse.redirect(new URL('/login', request.url), { status: 303 })

export function POST(request) {
  return createClient()
    .then((supabase) => supabase.auth.signOut())
    .then(() => toLogin(request))
}
