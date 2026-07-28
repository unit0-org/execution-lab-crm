'use client'

import { Stack } from '@/ui/layout/Stack'
import { FixRow } from './FixRow'
import { fixKey } from '../hooks/fixKey'

export function FixList({ fixes, selection }) {
  return (
    <Stack gap="xs">
      {fixes.map((fix) => (
        <FixRow key={fixKey(fix)} fix={fix} selection={selection} />
      ))}
    </Stack>
  )
}
