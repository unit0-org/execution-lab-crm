'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { showToast } from '@/ui/molecules/toastBus'
import { OrganizationFields } from './OrganizationFields'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { saveOrganizationAction } from '../actions/saveOrganization'

export function OrganizationForm({ profile }) {
  const onSaved = () => showToast('Organization info saved')
  const { action, error } = useFormAction(saveOrganizationAction, onSaved)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <OrganizationFields profile={profile} />
        <SubmitButton tone="primary">Save</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
