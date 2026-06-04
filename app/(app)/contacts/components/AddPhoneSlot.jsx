import { AddPhoneForm } from './AddPhoneForm'

export function AddPhoneSlot({ shown, contactId, onSaved, onCancel }) {
  if (!shown) return null

  return (
    <AddPhoneForm contactId={contactId} onSaved={onSaved}
      onCancel={onCancel} />
  )
}
