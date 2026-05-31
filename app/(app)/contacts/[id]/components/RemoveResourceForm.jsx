import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { SubmitIconButton } from '@/ui/SubmitIconButton'
import { removeResource } from '../actions'

export function RemoveResourceForm({ contactId, resourceId }) {
  return (
    <ConfirmInlineForm message="Remove this resource?" action={removeResource}>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="resource_id" value={resourceId} />
      <SubmitIconButton label="Remove resource">×</SubmitIconButton>
    </ConfirmInlineForm>
  )
}
