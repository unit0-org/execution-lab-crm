import { Text } from '@/ui/atoms/Text'
import { CopyList } from '@/ui/molecules/CopyList'

// The contact's phones, comma-separated and each click-to-copy.
export function PhoneSummary({ phones }) {
  if (!phones.length) return <Text size="sm">No phones yet</Text>

  return <CopyList values={phones.map((p) => p.phone)} />
}
