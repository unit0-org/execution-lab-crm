'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { FixList } from './FixList'
import { ApplyFixesBar } from './ApplyFixesBar'

export function FixSuggestions({ fix }) {
  if (!fix.list.length) return null

  return (
    <Stack gap="sm">
      <SectionHeader title="Suggested fixes" />
      <FixList fixes={fix.list} selected={fix.selected}
        onToggle={fix.toggle} />
      <ApplyFixesBar count={fix.selected.size} onApply={fix.apply} />
    </Stack>
  )
}
