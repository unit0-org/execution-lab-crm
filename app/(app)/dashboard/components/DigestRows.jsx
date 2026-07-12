import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { DigestRow } from './DigestRow'

// The section's rows, or a muted line when nothing qualified this week.
export function DigestRows({ rows, emptyText }) {
  if (!rows.length)
    return <Text tone="muted">{emptyText}</Text>

  return (
    <Stack gap="xs">
      {rows.map((row, index) => (
        <DigestRow key={row.primary + index} row={row} />
      ))}
    </Stack>
  )
}
