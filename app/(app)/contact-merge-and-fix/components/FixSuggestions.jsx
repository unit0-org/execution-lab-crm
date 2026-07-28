'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { FixList } from './FixList'

// No action row of its own: fixes are checked into the same selection as the
// duplicate groups, and the surface's one Apply runs them together.
export function FixSuggestions({ fixes, selection }) {
  if (!fixes.list.length) return null

  return (
    <Stack gap="sm">
      <SectionHeader title="Suggested fixes" />
      <FixList fixes={fixes.list} selection={selection} />
    </Stack>
  )
}
