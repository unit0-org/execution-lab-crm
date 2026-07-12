import { Text } from '@/ui/atoms/Text'

// The row's muted secondary detail, omitted when absent.
export function RowSecondary({ text }) {
  if (!text)
    return null

  return <Text tone="muted">{text}</Text>
}
