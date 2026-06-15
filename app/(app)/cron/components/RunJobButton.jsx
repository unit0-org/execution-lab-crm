'use client'

import { Button } from '@/ui/atoms/Button'
import { useRunJob } from '../hooks/useRunJob'

export function RunJobButton({ name, onRan }) {
  const { run, running } = useRunJob(onRan)

  return (
    <Button size="sm" tone="primary" loading={running}
      onClick={() => run(name)}>
      Run
    </Button>
  )
}
