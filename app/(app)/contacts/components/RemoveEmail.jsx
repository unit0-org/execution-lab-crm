'use client'

import { FormDelete } from './FormDelete'
import { removeEmailAction } from '../actions/removeEmail'

export function RemoveEmail({ emailId, onChanged }) {
  return (
    <FormDelete action={removeEmailAction} id={emailId}
      label="Remove email" onChanged={onChanged} />
  )
}
