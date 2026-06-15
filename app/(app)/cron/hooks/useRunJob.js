'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { runCronJobAction } from '../actions/runCronJob'

const feedback = (result) =>
  showToast(result?.ok ? `${result.name}: done` : 'Job failed')

export function useRunJob(onRan) {
  const [running, setRunning] = useState(false)

  const run = (name) => {
    setRunning(true)
    runCronJobAction(name)
      .then(feedback)
      .then(onRan)
      .then(() => setRunning(false))
  }

  return { run, running }
}
