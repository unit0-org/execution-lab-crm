'use client'

import { Stack } from '@/ui/layout/Stack'
import { useRelationships } from '../hooks/useRelationships'
import { RelationshipHeader } from './RelationshipHeader'
import { AddRelationshipModal } from './AddRelationshipModal'
import { RelationshipsBody } from './RelationshipsBody'

export function ContactRelationships({ contactId, initial, reveal }) {
  const { relationships, reload } = useRelationships(contactId, initial)

  const saved = () => {
    reload()
    reveal.hide()
  }

  return (
    <Stack gap="sm">
      <RelationshipHeader onAdd={reveal.show} />
      <AddRelationshipModal open={reveal.shown} contactId={contactId}
        onSaved={saved} onClose={reveal.hide} />
      <RelationshipsBody items={relationships} onChanged={reload} />
    </Stack>
  )
}
