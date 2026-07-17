'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useMeetingsView } from '../hooks/useMeetingsView'
import { SyncStatus } from './SyncStatus'
import { MeetingsListPaged } from './MeetingsListPaged'
import { MergeSuggestions } from './MergeSuggestions'
import { MeetingsToolbar } from './MeetingsToolbar'
import { NewMeetingModal } from './NewMeetingModal'

export function MeetingsView({ initialMeetings, lastSyncedAt }) {
  const { meetings, sync, suggestions, selection, modal, onCreated, onMerged } =
    useMeetingsView(initialMeetings, lastSyncedAt)

  return (
    <Stack gap="md">
      <SectionHeader title="Meetings" addLabel="New meeting"
        onAdd={modal.show} />
      <SyncStatus lastSyncedAt={sync.lastSyncedAt} syncing={sync.syncing}
        onForce={sync.force} />
      <MergeSuggestions suggestions={suggestions.items} onChanged={onMerged} />
      <MeetingsToolbar meetings={meetings.meetings} selection={selection}
        onMerged={onMerged} />
      <MeetingsListPaged meetings={meetings} selection={selection} />
      <NewMeetingModal open={modal.open} onClose={modal.hide}
        onCreated={onCreated} />
    </Stack>
  )
}
