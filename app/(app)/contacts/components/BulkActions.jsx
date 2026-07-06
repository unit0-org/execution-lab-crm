'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'
import { MergeButton } from './MergeButton'
import { BulkLabelMenu } from './BulkLabelMenu'

export function BulkActions({ count, canMerge, chosen, cats, onLabeled,
  onDelete, onMerge }) {
  const confirm = useToggle()
  const run = () => { confirm.hide(); onDelete() }

  return (
    <Inline gap="md">
      <Text size="sm">{count} selected</Text>
      <BulkLabelMenu chosen={chosen} cats={cats} onChanged={onLabeled} />
      <MergeButton show={canMerge} onMerge={onMerge} />
      <Button tone="danger" size="sm" onClick={confirm.show}>Delete</Button>
      <ConfirmDialog open={confirm.open} title={`Delete ${count}?`}
        onConfirm={run} onCancel={confirm.hide} />
    </Inline>
  )
}
