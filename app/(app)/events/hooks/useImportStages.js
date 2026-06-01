'use client'

import { useState, useEffect } from 'react'

const STAGES = ['Reading CSV…', 'Matching contacts…', 'Saving events…']

export function useImportStages(active) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!active) return

    const id = setInterval(() => {
      setStep((n) => Math.min(n + 1, STAGES.length - 1))
    }, 1200)

    return () => {
      clearInterval(id)
      setStep(0)
    }
  }, [active])

  return STAGES[step]
}
