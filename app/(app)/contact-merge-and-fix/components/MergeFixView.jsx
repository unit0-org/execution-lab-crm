'use client'

import { Stack } from '@/ui/layout/Stack'
import { AllClear } from './AllClear'
import { SelectionBar } from './SelectionBar'
import { DuplicateGroups } from './DuplicateGroups'
import { FixSuggestions } from './FixSuggestions'
import { ApplySelectedModal } from './ApplySelectedModal'
import { useDuplicateGroups } from '../hooks/useDuplicateGroups'
import { useFixList } from '../hooks/useFixList'
import { useSelection } from '../hooks/useSelection'
import { useApplySelected } from '../hooks/useApplySelected'

export function MergeFixView({ initialGroups, initialFixes }) {
  const groups = useDuplicateGroups(initialGroups)
  const fixes = useFixList(initialFixes)
  const selection = useSelection()
  const apply = useApplySelected(groups, fixes, selection)

  if (!groups.list.length && !fixes.list.length) return <AllClear />

  return (
    <Stack gap="lg">
      <SelectionBar count={apply.count} onApply={apply.start} />
      <DuplicateGroups groups={groups} selection={selection} />
      <FixSuggestions fixes={fixes} selection={selection} />
      <ApplySelectedModal apply={apply} />
    </Stack>
  )
}
