'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { portalCallbackUrl } from '@/lib/portal/auth/portalCallbackUrl'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

const back = (query) => redirect(`${portalRoutePath('/signin')}?${query}`)

// Email a one-time sign-in link to the portal callback. Access is still
// gated by membership, so a non-member who links a session reaches nothing.
export async function sendMagicLink(formData) {
  const email = formData.get('email')
  const supabase = await createClient()
  const emailRedirectTo = portalCallbackUrl(portalRoutePath('/account'))
  const { error } = await supabase.auth.signInWithOtp({
    email, options: { emailRedirectTo }
  })

  if (error) back(`error=${encodeURIComponent(error.message)}`)

  back('sent=1')
}
