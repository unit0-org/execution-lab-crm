'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { EditableField } from './EditableField'
import { RemovePhone } from './RemovePhone'
import { updatePhoneAction } from '../actions/updatePhone'

export function PhoneRow({ phone, onChanged }) {
  return (
    <GrowRow>
      <EditableField value={phone.phone} action={updatePhoneAction}
        hidden={{ id: phone.id }} />
      <RemovePhone phoneId={phone.id} onChanged={onChanged} />
    </GrowRow>
  )
}
