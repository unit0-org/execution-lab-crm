'use client'

import { FormDelete } from './FormDelete'
import { removeRelationshipAction } from '../actions/removeRelationship'

export function RemoveRelationship({ id, onChanged }) {
  return (
    <FormDelete action={removeRelationshipAction} id={id}
      label="Remove relationship" onChanged={onChanged} />
  )
}
