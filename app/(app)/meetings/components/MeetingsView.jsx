'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useMeetingsView } from '../hooks/useMeetingsView'
import { SyncStatus } from './SyncStatus'
import { MeetingsList } from './MeetingsList'
import { MergeSuggestions } from './MergeSuggestions'
import { NewMeetingModal } from './NewMeetingModal'

export function MeetingsView({ initialMeetings }) {
  const { meetings, sync, suggestions, modal, onCreated, onMerged } =
    useMeetingsView(initialMeetings)

  return (
    <Stack gap="md">
      <SectionHeader title="Meetings" addLabel="New meeting"
        onAdd={modal.show} />
      <SyncStatus lastSyncedAt={sync.lastSyncedAt} syncing={sync.syncing}
        onForce={sync.force} />
      <MergeSuggestions suggestions={suggestions.items} onChanged={onMerged} />
      <MeetingsList loading={meetings.loading} meetings={meetings.meetings} />
      <NewMeetingModal open={modal.open} onClose={modal.hide}
        onCreated={onCreated} />
    </Stack>
  )
}
