import { Stack } from '@/ui/Stack'
import { CardByType } from './CardByType'
import { MeetingGroupHeader } from './MeetingGroupHeader'

export function MeetingGroup({ group }) {
  return (
    <Stack gap="sm">
      <MeetingGroupHeader group={group} />
      {group.cards.map((c) => <CardByType key={c.id} card={c} />)}
    </Stack>
  )
}
