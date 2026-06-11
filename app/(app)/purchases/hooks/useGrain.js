'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// The active chart granularity from `?grain=`, plus a setter that keeps
// the current `?window=` so the chart and table stay in sync.
export function useGrain() {
  const params = useSearchParams()
  const router = useRouter()
  const path = usePathname()
  const grain = params.get('grain') || 'month'

  const setGrain = (value) => {
    const next = new URLSearchParams(params)
    next.set('grain', value)
    router.push(`${path}?${next}`)
  }

  return { grain, setGrain }
}
