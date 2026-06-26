import { Text } from '@/ui/atoms/Text'

// One "Label: value" line in the collapsed summary; em-dash when blank.
export function PreviewLine({ label, value }) {
  const shown = value || '—'

  return (
    <Text size="sm" tone="muted" gutter="none">
      <strong>{label}:</strong> {shown}
    </Text>
  )
}
