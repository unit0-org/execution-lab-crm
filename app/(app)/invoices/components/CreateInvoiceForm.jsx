'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { CreateInvoiceFields } from './CreateInvoiceFields'
import { useFormAction } from '../hooks/useFormAction'
import { createInvoiceAction } from '../actions/createInvoice'

export function CreateInvoiceForm({ onCreated }) {
  const { action, error } = useFormAction(createInvoiceAction, onCreated)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <CreateInvoiceFields />
        <SubmitButton tone="primary">Create</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
