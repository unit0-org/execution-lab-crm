import { Text } from '@/ui/atoms/Text'

// The answer below the head. Omitted when there's no question, since
// the answer already serves as the lead line in that case.
export function NuggetBody({ question, answer }) {
  if (!question) return null

  return <Text gutter="none">{answer}</Text>
}
