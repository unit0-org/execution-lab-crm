'use client'

import { Stack } from '@/ui/layout/Stack'
import { EmptyState } from '@/ui/molecules/EmptyState'
import { DuplicateGroups } from './DuplicateGroups'
import { FixSuggestions } from './FixSuggestions'
import { useDuplicateGroups } from '../hooks/useDuplicateGroups'
import { useFixSelection } from '../hooks/useFixSelection'

function AllClear() {
  return <EmptyState title="All clear"
    message="No duplicates or fixes to review." />
}

export function MergeFixView({ initialGroups, initialFixes }) {
  const groups = useDuplicateGroups(initialGroups)
  const fix = useFixSelection(initialFixes)

  if (!groups.list.length && !fix.list.length) return <AllClear />

  return (
    <Stack gap="lg">
      <DuplicateGroups groups={groups} />
      <FixSuggestions fix={fix} />
    </Stack>
  )
}
