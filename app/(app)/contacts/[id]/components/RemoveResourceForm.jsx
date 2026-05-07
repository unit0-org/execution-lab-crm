import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { IconButton } from '@/ui/IconButton'
import { removeResource } from '../actions'

export function RemoveResourceForm({ contactId, resourceId }) {
  return (
    <ConfirmInlineForm message="Remove this resource?" action={removeResource}>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="resource_id" value={resourceId} />
      <IconButton type="submit" label="Remove resource">×</IconButton>
    </ConfirmInlineForm>
  )
}
