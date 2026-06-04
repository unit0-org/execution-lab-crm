import { Icon } from '@/ui/atoms/Icon'

// A paperclip shown only when the meeting has a transcript attached.
export function TranscriptMark({ show }) {
  if (!show) return null

  return <Icon name="paperclip" size={16} />
}
