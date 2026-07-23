'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MergeModal } from '@/app/(app)/contacts/components/MergeModal'
import { GroupHeader } from './GroupHeader'
import { GroupContacts } from './GroupContacts'
import { useGroupMerge } from '../hooks/useGroupMerge'

export function DuplicateGroupCard({ group, onMerged }) {
  const merge = useGroupMerge(group, onMerged)

  return (
    <Card>
      <Stack gap="sm">
        <GroupHeader reason={group.reason} onMerge={merge.start} />
        <GroupContacts contacts={group.contacts} />
        <MergeModal contacts={merge.review} onConfirm={merge.confirm}
          onCancel={merge.cancel} />
      </Stack>
    </Card>
  )
}
