'use client'

import { EmptyState } from '@/ui/molecules/EmptyState'
import { DuplicateGroupList } from './DuplicateGroupList'
import { useDuplicateGroups } from '../hooks/useDuplicateGroups'

function AllClear() {
  return <EmptyState title="All clear"
    message="No duplicate contacts to review." />
}

export function MergeFixView({ initialGroups }) {
  const groups = useDuplicateGroups(initialGroups)

  if (!groups.list.length) return <AllClear />

  return <DuplicateGroupList groups={groups.list} onMerged={groups.remove} />
}
