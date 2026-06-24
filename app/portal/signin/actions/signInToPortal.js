'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { portalSignInOptions } from '@/lib/portal/auth/portalSignInOptions'
import { portalCallbackUrl } from '@/lib/portal/auth/portalCallbackUrl'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

const errorUrl = (message) =>
  `${portalRoutePath('/signin')}?error=${encodeURIComponent(message)}`

// Start Google sign-in for a portal member (minimal scope; portal callback).
export async function signInToPortal() {
  const supabase = await createClient()
  const cb = portalCallbackUrl(portalRoutePath('/account'))
  const opts = { provider: 'google', options: portalSignInOptions(cb) }
  const { data, error } = await supabase.auth.signInWithOAuth(opts)

  if (error) redirect(errorUrl(error.message))

  redirect(data.url)
}
