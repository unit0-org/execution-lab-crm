'use client'

import { useRouter } from 'next/navigation'

// After a cohort save, return to where the form was opened from: the
// cohort's detail page when editing, the list when creating — refreshing
// so the new values show.
export function useCohortFormNav(cohortId) {
  const router = useRouter()
  const dest = cohortId ? `/cohorts/${cohortId}` : '/cohorts'

  return () => { router.push(dest); router.refresh() }
}
