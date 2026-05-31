'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

const origin = (h) =>
  process.env.NEXT_PUBLIC_SITE_URL || `https://${h.get('host')}`

const cbUrl = (h, next) =>
  `${origin(h)}/auth/callback?next=${encodeURIComponent(next)}`

const start = ([supabase, h], next) => {
  const opts = { provider: 'google', options: { redirectTo: cbUrl(h, next) } }
  return supabase.auth.signInWithOAuth(opts).then(({ data, error }) => {
    if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`)
    redirect(data.url)
  })
}

export async function signInWithGoogle(formData) {
  const next = formData.get('next') || '/'
  return Promise.all([createClient(), headers()]).then((r) => start(r, next))
}
