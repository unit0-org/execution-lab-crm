'use client'

import { Form } from '@/ui/molecules/Form'
import { FormError } from '@/ui/molecules/FormError'
import { TextField } from '@/ui/atoms/TextField'
import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { createFounderInviteAction } from '../actions/createFounderInvite'

export function NewInviteForm({ onCreated }) {
  const { action, error } = useFormAction(createFounderInviteAction,
    onCreated)

  return (
    <Form action={action}>
      <GrowRow>
        <TextField name="email" type="email" placeholder="Invite by email" />
        <IconButton type="submit" tone="primary" label="Create invite">
          <Icon name="plus" size={16} />
        </IconButton>
      </GrowRow>
      <FormError message={error} />
    </Form>
  )
}
