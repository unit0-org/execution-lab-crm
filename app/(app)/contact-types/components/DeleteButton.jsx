import { Button } from '@/ui/Button'
import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { removeContactType } from '../actions'

const MSG = 'Delete this type? All assignments will be removed.'

export function DeleteButton({ typeId }) {
  return (
    <ConfirmInlineForm message={MSG} action={removeContactType}>
      <input type="hidden" name="type_id" value={typeId} />
      <Button type="submit" size="sm" tone="danger">Delete</Button>
    </ConfirmInlineForm>
  )
}
