import { Text } from '@/ui/atoms/Text'

export function SyncSummary({ result }) {
  if (!result) return null

  return (
    <Text size="sm" tone="muted">
      Imported {result.imported} · skipped {result.skipped}
    </Text>
  )
}
