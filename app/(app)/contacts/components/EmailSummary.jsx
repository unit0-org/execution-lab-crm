import { Text } from '@/ui/atoms/Text'
import { CopyList } from '@/ui/molecules/CopyList'

// The contact's emails, comma-separated and each click-to-copy.
export function EmailSummary({ emails }) {
  if (!emails.length) return <Text size="sm">No emails yet</Text>

  return <CopyList values={emails.map((e) => e.email)} />
}
