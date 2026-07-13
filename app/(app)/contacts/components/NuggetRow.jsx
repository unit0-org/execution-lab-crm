import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { FieldLabel } from './FieldLabel'

// One fact as a compact row for the collapsed panel: its question, when it
// has one, then the answer. FieldLabel renders nothing for a bare fact.
export function NuggetRow({ nugget }) {
  return (
    <Inline gap="sm">
      <FieldLabel label={nugget.question} />
      <Text gutter="none">{nugget.answer}</Text>
    </Inline>
  )
}
