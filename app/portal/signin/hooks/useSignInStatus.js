'use client'

import { useSearchParams } from 'next/navigation'

// The sign-in result from the URL: 'sent' after a magic link request, or
// an error message Supabase returned.
export function useSignInStatus() {
  const params = useSearchParams()

  return {
    sent: params.get('sent') === '1',
    error: params.get('error') || null
  }
}
