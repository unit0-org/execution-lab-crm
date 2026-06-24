'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useRemoveResource } from '../hooks/useRemoveResource'

export function ResourceRow({ item, cohortId, onChanged }) {
  const removeResource = useRemoveResource(onChanged)

  return (
    <GrowRow align="center">
      <ExternalLink href={item.url}>{item.title}</ExternalLink>
      <RowDelete onConfirm={() => removeResource(item.id, cohortId)}
        title="Delete resource" />
    </GrowRow>
  )
}
