'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { FormActions } from '@/ui/molecules/FormActions'
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
        <FormActions />
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
