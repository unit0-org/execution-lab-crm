'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Text } from '@/ui/atoms/Text'
import { FormActions } from '@/ui/molecules/FormActions'
import { PlanReview } from './PlanReview'

// The one review a batch passes through: no merge runs without a confirm,
// batched or not.
export function ApplySelectedModal({ apply }) {
  return (
    <TitledModal open={apply.open} title="Apply selected"
      onClose={apply.cancel}>
      <PlanReview plan={apply.plan} />
      <Text size="sm">Merging cannot be undone.</Text>
      <FormActions label="Apply" busy={apply.busy} onCancel={apply.cancel}
        onConfirm={apply.confirm} />
    </TitledModal>
  )
}
