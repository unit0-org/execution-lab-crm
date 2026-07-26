'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { TextField } from '@/ui/atoms/TextField'
import { FormActions } from '@/ui/molecules/FormActions'
import { useSetPassword } from '../hooks/useSetPassword'

const NOTE = 'The member is not emailed — pass the password on yourself.'

// Set a member's portal password. Any existing one is replaced, never shown.
export function SetPasswordModal({ open, onClose, member }) {
  const form = useSetPassword(member.contactId, onClose)

  return (
    <TitledModal open={open} title="Set password" onClose={onClose}>
      <Stack gap="md">
        <Text size="sm">{member.email}</Text>
        <TextField label="New password" type="password" value={form.password}
          onChange={(event) => form.setPassword(event.target.value)} />
        <Text size="sm">{NOTE}</Text>
        <FormActions label="Set password" onConfirm={form.submit}
          onCancel={onClose} />
      </Stack>
    </TitledModal>
  )
}
