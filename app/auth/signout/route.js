import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const toLogin = (request) =>
  NextResponse.redirect(new URL('/login', request.url), { status: 303 })

export async function POST(request) {
  const supabase = await createClient()
  await supabase.auth.signOut()

  return toLogin(request)
}
