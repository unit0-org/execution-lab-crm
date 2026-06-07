'use client'

import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { useQuickContactForm } from '../hooks/useQuickContactForm'

export function QuickContactFields({ onSubmit, initialFirst }) {
  const form = useQuickContactForm(onSubmit, initialFirst)
  const { fields, set, submit } = form

  return (
    <Stack gap="sm">
      <TextField label="First name" value={fields.first}
        onChange={set('first')} />
      <TextField label="Last name" value={fields.last}
        onChange={set('last')} />
      <TextField label="Email" type="email" value={fields.email}
        onChange={set('email')} />
      <Button tone="primary" onClick={submit}>Add contact</Button>
    </Stack>
  )
}
