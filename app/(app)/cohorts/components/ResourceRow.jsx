'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeCohortResourceAction } from '../actions/removeCohortResource'

export function ResourceRow({ item, cohortId, onChanged }) {
  const removeResource = useActionHandler(removeCohortResourceAction, {
    onDone: onChanged, toast: 'Resource deleted'
  })

  return (
    <GrowRow align="center">
      <ExternalLink href={item.url}>{item.title}</ExternalLink>
      <RowDelete onConfirm={() => removeResource(item.id, cohortId)}
        title="Delete resource" />
    </GrowRow>
  )
}
