'use client'

import { Button } from '@/ui/atoms/Button'
import { useRunJob } from '../hooks/useRunJob'

export function RunJobButton({ name, onRan }) {
  const { run, running } = useRunJob(onRan)
  const label = running ? 'Running…' : 'Run'

  return (
    <Button size="sm" tone="primary" disabled={running}
      onClick={() => run(name)}>
      {label}
    </Button>
  )
}
