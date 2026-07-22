'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from '@/ui/molecules/FormError'
import { FormActions } from '@/ui/molecules/FormActions'
import { CompanyFields } from './CompanyFields'
import { CompanyIdInput } from './CompanyIdInput'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'

export function CompanyForm({ action, title, company, onSaved, onCancel }) {
  const form = useFormAction(action, onSaved)

  return (
    <Form action={form.action}>
      <Stack gap="md">
        <Heading level={3}>{title}</Heading>
        <CompanyIdInput company={company} />
        <CompanyFields company={company} />
        <FormError message={form.error} />
        <FormActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
