'use client'

import { Form } from '@/ui/molecules/Form'
import { TextButton } from '@/ui/atoms/TextButton'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { resolveConflictAction } from '../actions/resolveConflict'

export function ResolveButton({ id, winner, label, onResolved }) {
  const { action } = useFormAction(resolveConflictAction, onResolved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="winner" value={winner} />
      <TextButton type="submit">{label}</TextButton>
    </Form>
  )
}
