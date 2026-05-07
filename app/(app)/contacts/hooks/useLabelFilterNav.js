'use client'

import { useRouter } from 'next/navigation'

// Returns a change-handler that pushes /contacts?tag=NAME (or clears it).
export function useLabelFilterNav() {
  const router = useRouter()
  return (e) => {
    const value = e.target.value
    const qs = value ? `?tag=${encodeURIComponent(value)}` : ''
    router.push(`/contacts${qs}`)
  }
}
