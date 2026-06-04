'use client'

import { Form } from '@/ui/molecules/Form'
import { TextButton } from '@/ui/atoms/TextButton'
import { useFormAction } from '../hooks/useFormAction'
import { setMemberRoleAction } from '../actions/setMemberRole'

export function RoleToggle({ member, onChanged }) {
  const { action } = useFormAction(setMemberRoleAction, onChanged)
  const next = member.role === 'admin' ? 'member' : 'admin'

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={member.id} />
      <input type="hidden" name="role" value={next} />
      <TextButton type="submit">Make {next}</TextButton>
    </Form>
  )
}
