'use client'

import { useState } from 'react'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'
import { MergeButton } from './MergeButton'
import { ConfirmBulkDelete } from './ConfirmBulkDelete'

export function BulkActions({ count, canMerge, onDelete, onMerge }) {
  const [confirming, setConfirming] = useState(false)

  if (confirming) {
    return <ConfirmBulkDelete count={count} onDelete={onDelete}
      onCancel={() => setConfirming(false)} />
  }

  return (
    <Inline gap="md">
      <Text size="sm">{count} selected</Text>
      <MergeButton show={canMerge} onMerge={onMerge} />
      <Button tone="danger" size="sm"
        onClick={() => setConfirming(true)}>Delete</Button>
    </Inline>
  )
}
