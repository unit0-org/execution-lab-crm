'use client'

import { useSearchParams } from 'next/navigation'

// Sign-in inputs read from the URL: 'sent' after a magic link request, an
// error Supabase returned, and the email to prefill from an invite link.
export function useSignInStatus() {
  const params = useSearchParams()

  return {
    sent: params.get('sent') === '1',
    error: params.get('error') || null,
    email: params.get('email') || ''
  }
}
