import { Text } from '@/ui/atoms/Text'
import { conflictPhrase } from '../hooks/conflictPhrase'

const MOVES =
  'The records become one contact — emails, phones, notes, meetings, ' +
  'files and everything else move across.'

// What a merge actually does, so the survivor choice below isn't read as
// "whose data survives": all of it does. Only a field the records disagree
// on has to be decided.
export function MergeSummary({ conflicts }) {
  if (!conflicts.length) return <Text size="sm">{MOVES}</Text>

  return (
    <Text size="sm">
      {MOVES} They disagree on {conflictPhrase(conflicts)}.
    </Text>
  )
}
