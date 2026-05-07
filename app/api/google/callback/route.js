import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { siteOrigin } from '@/lib/google/origin'
import { redirectWithError } from '@/lib/google/redirects'
import { validateCallback } from '@/lib/google/validateCallback'
import { persistConnection } from '@/lib/google/persistConnection'

export async function GET(request) {
  const url = new URL(request.url)
  const v = await validateCallback(url)
  if (!v.ok) return redirectWithError(url.origin, v.error)

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.redirect(new URL('/login', url.origin))

  try {
    const origin = siteOrigin(await headers())
    const { error } = await persistConnection(supabase, { origin, code: v.code })
    if (error) return redirectWithError(url.origin, error.message)

    return NextResponse.redirect(new URL('/contacts?connected=1', url.origin))
  } catch (err) {
    return redirectWithError(url.origin, err.message)
  }
}
