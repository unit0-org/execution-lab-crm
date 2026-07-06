'use client'

import { FormDelete } from './FormDelete'
import { removePhoneAction } from '../actions/removePhone'

export function RemovePhone({ phoneId, onChanged }) {
  return (
    <FormDelete action={removePhoneAction} id={phoneId}
      label="Remove phone" onChanged={onChanged} />
  )
}
