'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { CronJobsTable } from './CronJobsTable'

const NOTE = 'Runs daily at 06:00 UTC, in order. Trigger any job now.'

export function CronView({ jobs }) {
  const router = useRouter()
  const reload = () => router.refresh()

  return (
    <Stack gap="md">
      <Heading gutter="none">Cron</Heading>
      <Text tone="muted">{NOTE}</Text>
      <CronJobsTable jobs={jobs} onRan={reload} />
    </Stack>
  )
}
