'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { googleSignInOptions } from '@/lib/google/signInOptions'

const origin = (h) =>
  process.env.NEXT_PUBLIC_SITE_URL || `https://${h.get('host')}`

const cbUrl = (h, next) =>
  `${origin(h)}/auth/callback?next=${encodeURIComponent(next)}`

export async function signInWithGoogle(formData) {
  const next = formData.get('next') || '/dashboard'
  const supabase = await createClient()
  const h = await headers()
  const opts = {
    provider: 'google',
    options: googleSignInOptions(cbUrl(h, next))
  }
  const { data, error } = await supabase.auth.signInWithOAuth(opts)

  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`)

  redirect(data.url)
}
