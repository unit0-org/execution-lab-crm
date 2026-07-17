'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { showToast } from '@/ui/molecules/toastBus'
import { useMeetings } from './useMeetings'
import { useMeetingSync } from './useMeetingSync'
import { useMergeSuggestions } from './useMergeSuggestions'
import { useRowSelection } from '@/ui/molecules/useRowSelection'

export function useMeetingsView(initialMeetings, lastSyncedAt) {
  const meetings = useMeetings(initialMeetings)
  const sync = useMeetingSync(meetings.reload, lastSyncedAt)
  const suggestions = useMergeSuggestions()
  const selection = useRowSelection(meetings.meetings)
  const modal = useToggle()

  const onCreated = () => {
    modal.hide()
    meetings.reload()
    showToast('Meeting created')
  }

  const onMerged = () => {
    meetings.reload()
    suggestions.reload()
  }

  return { meetings, sync, suggestions, selection, modal, onCreated, onMerged }
}
