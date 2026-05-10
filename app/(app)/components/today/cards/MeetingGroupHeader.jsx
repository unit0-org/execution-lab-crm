import { Text } from '@/ui/Text'

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleString('en', { weekday: 'short', month: 'short', day: 'numeric' }) : null

const buildLabel = (group) => {
  if (!group.meetingId) return 'From other prompts'
  const date = formatDate(group.meeting?.started_at)

  return `From: ${group.meeting?.title || 'Untitled'}${date ? ` · ${date}` : ''}`
}

export function MeetingGroupHeader({ group }) {
  return <Text tone="muted" size="sm">{buildLabel(group)}</Text>
}
