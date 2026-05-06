'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signInWithGoogle(formData) {
  const next = formData.get('next') || '/contacts'
  const supabase = await createClient()

  const h = await headers()
  const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${h.get('host')}`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}` },
  })

  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`)
  redirect(data.url)
}
