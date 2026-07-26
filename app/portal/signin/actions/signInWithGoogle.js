'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { memberSignInOptions } from '@/lib/google/memberSignInOptions'
import { portalCallbackUrl } from '@/lib/portal/auth/portalCallbackUrl'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { signInFailed } from '@/lib/portal/auth/portalSignInRedirect'

// Start Google sign-in for a member. The callback is tagged flow=portal, so
// it skips the staff-only Google token capture. Access is still gated by
// membership: a non-member who links a Google account reaches nothing.
export async function signInWithGoogle() {
  const supabase = await createClient()
  const redirectTo = portalCallbackUrl(portalRoutePath('/account'))
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: memberSignInOptions(redirectTo)
  })

  if (error) signInFailed(error.message)

  redirect(data.url)
}
