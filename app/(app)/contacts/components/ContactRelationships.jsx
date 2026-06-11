'use client'

import { Stack } from '@/ui/layout/Stack'
import { useRelationships } from '../hooks/useRelationships'
import { useReveal } from '../hooks/useReveal'
import { RelationshipHeader } from './RelationshipHeader'
import { AddRelationshipModal } from './AddRelationshipModal'
import { RelationshipsBody } from './RelationshipsBody'

export function ContactRelationships({ contactId }) {
  const { relationships, reload } = useRelationships(contactId)
  const add = useReveal()

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <RelationshipHeader onAdd={add.show} />
      <AddRelationshipModal open={add.shown} contactId={contactId}
        onSaved={saved} onClose={add.hide} />
      <RelationshipsBody items={relationships} onChanged={reload} />
    </Stack>
  )
}
