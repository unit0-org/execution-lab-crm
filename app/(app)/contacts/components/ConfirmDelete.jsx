'use client'

import { ConfirmDeleteForm } from './ConfirmDeleteForm'
import { deleteContactAction } from '../actions/deleteContact'

export function ConfirmDelete({ contactId, onCancel }) {
  return (
    <ConfirmDeleteForm heading="Delete contact" action={deleteContactAction}
      id={contactId} onCancel={onCancel} />
  )
}
