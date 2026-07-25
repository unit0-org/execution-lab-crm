'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { signInFailed } from '@/lib/portal/auth/portalSignInRedirect'

// One message for every failure, on purpose: a wrong password and an unknown
// email must be indistinguishable, or this page becomes an oracle for which
// addresses have an account.
const REFUSED = 'Wrong email or password'

// Sign in with a password set for the member in the CRM. Membership is still
// what unlocks the member area — a session alone reaches nothing.
export async function signInWithPassword(formData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) signInFailed(REFUSED)

  redirect(portalRoutePath('/account'))
}
