import { SubmitButton } from '@/ui/SubmitButton'
import { InlineForm } from '@/ui/InlineForm'
import { removeLabel } from '../actions'

export function DeleteLabelButton({ labelId }) {
  return (
    <InlineForm action={removeLabel}>
      <input type="hidden" name="label_id" value={labelId} />
      <SubmitButton size="sm" tone="danger">Delete</SubmitButton>
    </InlineForm>
  )
}
