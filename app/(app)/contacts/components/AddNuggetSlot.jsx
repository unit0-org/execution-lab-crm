import { AddNuggetForm } from './AddNuggetForm'

export function AddNuggetSlot({ shown, contactId, onSaved, onCancel }) {
  if (!shown) return null

  return (
    <AddNuggetForm contactId={contactId} onSaved={onSaved}
      onCancel={onCancel} />
  )
}
