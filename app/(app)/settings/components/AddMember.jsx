'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Select } from '@/ui/atoms/Select'
import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { inviteMemberAction } from '../actions/inviteMember'

const ROLES = ['member', 'admin']

export function AddMember({ organizationId, onChanged }) {
  const { action } = useFormAction(inviteMemberAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="organization_id" value={organizationId} />
      <GrowRow>
        <TextField name="email" type="email" placeholder="Invite by email" />
        <Select name="role" options={ROLES} />
        <IconButton type="submit" tone="primary" label="Invite">
          <Icon name="plus" size={16} />
        </IconButton>
      </GrowRow>
    </Form>
  )
}
