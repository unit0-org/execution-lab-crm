'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { useFormAction } from '../../hooks/useFormAction'
import { addLineAction } from '../../actions/addLine'

export function AddLineForm({ invoiceId, onAdded }) {
  const { action, error } = useFormAction(addLineAction, onAdded)

  return (
    <Form action={action}>
      <input type="hidden" name="invoice_id" value={invoiceId} />
      <Stack gap="sm">
        <TextField name="description" placeholder="Description" />
        <TextField name="quantity" type="number" defaultValue="1"
          placeholder="Qty" />
        <TextField name="unit_amount" placeholder="Unit amount (CAD)" />
        <SubmitButton tone="primary">Add</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
