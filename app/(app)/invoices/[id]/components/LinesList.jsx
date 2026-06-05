'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { LineRow } from './LineRow'

export function LinesList({ lines, onChanged }) {
  if (!lines.length) return <Text tone="muted">No items yet.</Text>

  return (
    <Stack gap="xs">
      {lines.map((line) => (
        <LineRow key={line.id} line={line} onChanged={onChanged} />
      ))}
    </Stack>
  )
}
