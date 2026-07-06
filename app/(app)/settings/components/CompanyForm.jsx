'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { showToast } from '@/ui/molecules/toastBus'
import { CompanyFields } from './CompanyFields'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { saveCompanyAction } from '../actions/saveCompany'

export function CompanyForm({ profile }) {
  const onSaved = () => showToast('Company info saved')
  const { action, error } = useFormAction(saveCompanyAction, onSaved)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <CompanyFields profile={profile} />
        <SubmitButton tone="primary">Save</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
