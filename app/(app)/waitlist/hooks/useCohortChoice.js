'use client'

import { useState } from 'react'
import { defaultCohortId } from '../components/defaultCohortId'

// Which cohort to accept the applicant into: starts on the cohort they
// signed up for and exposes whether the current pick is full, so the bar
// can warn before overfilling it.
export function useCohortChoice(entry, cohorts) {
  const [cohortId, setCohortId] = useState(defaultCohortId(entry, cohorts))
  const chosen = cohorts.find((cohort) => cohort.id === cohortId)

  return {
    cohorts,
    cohortId,
    choose: setCohortId,
    full: Boolean(chosen && chosen.full)
  }
}
