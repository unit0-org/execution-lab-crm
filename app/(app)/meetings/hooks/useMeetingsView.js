'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { showToast } from '@/ui/molecules/toastBus'
import { useMeetings } from './useMeetings'
import { useMeetingSync } from './useMeetingSync'
import { useMergeSuggestions } from './useMergeSuggestions'

export function useMeetingsView(initialMeetings) {
  const meetings = useMeetings(initialMeetings)
  const sync = useMeetingSync(meetings.reload)
  const suggestions = useMergeSuggestions()
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

  return { meetings, sync, suggestions, modal, onCreated, onMerged }
}
