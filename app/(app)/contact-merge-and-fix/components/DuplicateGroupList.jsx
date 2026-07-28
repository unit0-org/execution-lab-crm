'use client'

import { Stack } from '@/ui/layout/Stack'
import { DuplicateGroupCard } from './DuplicateGroupCard'
import { groupKey } from '../hooks/groupKey'

export function DuplicateGroupList({ groups, selection, onResolved }) {
  return (
    <Stack gap="md">
      {groups.map((group) => (
        <DuplicateGroupCard key={groupKey(group)} group={group}
          selection={selection} onResolved={onResolved} />
      ))}
    </Stack>
  )
}
