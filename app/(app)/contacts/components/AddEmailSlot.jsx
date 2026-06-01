import { AddEmailForm } from './AddEmailForm'

export function AddEmailSlot({ shown, contactId, onSaved, onCancel }) {
  if (!shown) return null

  return (
    <AddEmailForm contactId={contactId} onSaved={onSaved}
      onCancel={onCancel} />
  )
}
