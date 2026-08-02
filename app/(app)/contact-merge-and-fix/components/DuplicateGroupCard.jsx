'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MergeModal } from '@/app/(app)/contacts/components/MergeModal'
import { GroupHeader } from './GroupHeader'
import { GroupContacts } from './GroupContacts'
import { AmbiguousNote } from './AmbiguousNote'
import { useGroupCard } from '../hooks/useGroupCard'

export function DuplicateGroupCard({ group, selection, onResolved }) {
  const card = useGroupCard(group, selection, onResolved)

  return (
    <Card>
      <Stack gap="sm">
        <GroupHeader reasons={group.reasons} selected={card.selected}
          mergeable={card.mergeable} onSelect={card.select}
          onMerge={card.merge.start} onDismiss={card.dismiss.run}
          dismissing={card.dismiss.busy} />
        <AmbiguousNote mergeable={card.mergeable} />
        <GroupContacts contacts={group.contacts} />
        <MergeModal contacts={card.merge.review}
          onConfirm={card.merge.confirm} onCancel={card.merge.cancel} />
      </Stack>
    </Card>
  )
}
