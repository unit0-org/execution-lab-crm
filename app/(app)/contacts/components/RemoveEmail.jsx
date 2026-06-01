'use client'

import { Form } from '@/ui/molecules/Form'
import { Button } from '@/ui/atoms/Button'
import { useFormAction } from '../hooks/useFormAction'
import { removeEmailAction } from '../actions/removeEmail'

export function RemoveEmail({ emailId, onChanged }) {
  const { action } = useFormAction(removeEmailAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={emailId} />
      <Button type="submit" tone="danger" size="sm">Remove</Button>
    </Form>
  )
}
