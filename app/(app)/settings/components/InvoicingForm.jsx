'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { showToast } from '@/ui/molecules/toastBus'
import { InvoicingFields } from './InvoicingFields'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { saveInvoiceSettingAction } from '../actions/saveInvoiceSetting'

export function InvoicingForm({ setting }) {
  const onSaved = () => showToast('Invoicing settings saved')
  const { action, error } = useFormAction(saveInvoiceSettingAction, onSaved)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <InvoicingFields setting={setting} />
        <SubmitButton tone="primary">Save</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
