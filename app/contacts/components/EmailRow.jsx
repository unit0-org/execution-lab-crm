'use client'

import { Stack } from '@/ui/layout/Stack'
import { EditableField } from './EditableField'
import { RemoveEmail } from './RemoveEmail'
import { updateEmailAction } from '../actions/updateEmail'

export function EmailRow({ email, onChanged }) {
  return (
    <Stack gap="xs">
      <EditableField label="Email" value={email.email}
        action={updateEmailAction} hidden={{ id: email.id }} />
      <RemoveEmail emailId={email.id} onChanged={onChanged} />
    </Stack>
  )
}
