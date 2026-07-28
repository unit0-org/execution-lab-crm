'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MergeModal } from '@/app/(app)/contacts/components/MergeModal'
import { GroupHeader } from './GroupHeader'
import { GroupContacts } from './GroupContacts'
import { useGroupMerge } from '../hooks/useGroupMerge'
import { useGroupDismiss } from '../hooks/useGroupDismiss'
import { useBusyRun } from '@/app/(app)/hooks/useBusyRun'

export function DuplicateGroupCard({ group, onResolved }) {
  const merge = useGroupMerge(group, onResolved)
  const dismiss = useBusyRun(useGroupDismiss(group, onResolved))

  return (
    <Card>
      <Stack gap="sm">
        <GroupHeader reason={group.reason} onMerge={merge.start}
          onDismiss={dismiss.run} dismissing={dismiss.busy} />
        <GroupContacts contacts={group.contacts} />
        <MergeModal contacts={merge.review} onConfirm={merge.confirm}
          onCancel={merge.cancel} />
      </Stack>
    </Card>
  )
}
