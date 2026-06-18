'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { showToast } from '@/ui/molecules/toastBus'
import { ProfileFields } from './ProfileFields'
import { useFormAction } from '../hooks/useFormAction'
import { saveMemberProfileAction } from '../actions/saveMemberProfile'

export function ProfileForm({ profile }) {
  const onSaved = () => showToast('Profile saved')
  const { action, error } = useFormAction(saveMemberProfileAction, onSaved)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <ProfileFields profile={profile} />
        <SubmitButton tone="primary">Save</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
