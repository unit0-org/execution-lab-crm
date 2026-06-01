'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { EditableField } from './EditableField'
import { RemoveEmail } from './RemoveEmail'
import { updateEmailAction } from '../actions/updateEmail'

export function EmailRow({ email, onChanged }) {
  return (
    <GrowRow>
      <EditableField value={email.email} action={updateEmailAction}
        hidden={{ id: email.id }} />
      <RemoveEmail emailId={email.id} onChanged={onChanged} />
    </GrowRow>
  )
}
