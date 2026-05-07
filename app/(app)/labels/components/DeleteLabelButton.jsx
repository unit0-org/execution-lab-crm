import { Button } from '@/ui/Button'
import { InlineForm } from '@/ui/InlineForm'
import { removeLabel } from '../actions'

export function DeleteLabelButton({ labelId }) {
  return (
    <InlineForm action={removeLabel}>
      <input type="hidden" name="label_id" value={labelId} />
      <Button type="submit" size="sm" tone="danger">Delete</Button>
    </InlineForm>
  )
}
