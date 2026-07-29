'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { FormActions } from '@/ui/molecules/FormActions'
import { PlanReview } from './PlanReview'
import { ApplyStatus } from './ApplyStatus'

// The one review a batch passes through: no merge runs without a confirm,
// batched or not. Once confirmed it stays open as the run's progress board.
export function ApplySelectedModal({ apply }) {
  return (
    <TitledModal open={apply.open} title="Apply selected"
      onClose={apply.cancel}>
      <PlanReview plan={apply.plan} progress={apply.progress} />
      <ApplyStatus busy={apply.busy} done={apply.progress.count}
        total={apply.count} />
      <FormActions label="Apply" busy={apply.busy} onCancel={apply.cancel}
        onConfirm={apply.confirm} />
    </TitledModal>
  )
}
