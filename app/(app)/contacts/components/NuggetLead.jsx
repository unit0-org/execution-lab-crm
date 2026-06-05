import { Text } from '@/ui/atoms/Text'
import { FieldLabel } from './FieldLabel'

// The card's lead line: the question when present, otherwise the
// answer itself stands in so the row is never empty beside the chevron.
export function NuggetLead({ question, answer }) {
  if (question) return <FieldLabel label={question} />

  return <Text gutter="none">{answer}</Text>
}
