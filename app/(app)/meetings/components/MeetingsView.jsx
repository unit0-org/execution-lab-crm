'use client'

import { Stack } from '@/ui/layout/Stack'
import { useMeetings } from '../hooks/useMeetings'
import { SyncMeetings } from './SyncMeetings'
import { MeetingsTable } from './MeetingsTable'
import { MeetingsSkeleton } from './MeetingsSkeleton'

export function MeetingsView() {
  const { meetings, loading, reload } = useMeetings()

  if (loading) return <MeetingsSkeleton />

  return (
    <Stack gap="md">
      <SyncMeetings onSynced={reload} />
      <MeetingsTable meetings={meetings} />
    </Stack>
  )
}
