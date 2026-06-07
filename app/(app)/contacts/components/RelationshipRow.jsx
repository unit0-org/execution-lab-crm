'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Link } from '@/ui/atoms/Link'
import { RemoveRelationship } from './RemoveRelationship'

export function RelationshipRow({ rel, onChanged }) {
  return (
    <GrowRow align="center">
      <Inline gap="sm">
        <Text tone="muted">{rel.label}</Text>
        <Link href={`/contacts/${rel.contactId}`}>{rel.name}</Link>
      </Inline>
      <RemoveRelationship id={rel.id} onChanged={onChanged} />
    </GrowRow>
  )
}
