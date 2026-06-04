import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { RemoveNote } from './RemoveNote'

export function MeetingNoteItem({ note, onChanged }) {
  return (
    <Inline gap="sm">
      <Text size="sm">{note.body}</Text>
      <RemoveNote id={note.id} onChanged={onChanged} />
    </Inline>
  )
}
