'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { showToast } from '@/ui/molecules/toastBus'
import { DigestFields } from './DigestFields'
import { SendDigestNow } from './SendDigestNow'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { saveDigestSettingAction } from '../actions/saveDigestSetting'

export function DigestForm({ setting }) {
  const onSaved = () => showToast('Digest settings saved')
  const { action, error } = useFormAction(saveDigestSettingAction, onSaved)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <DigestFields setting={setting} />
        <SubmitButton tone="primary">Save</SubmitButton>
        <FieldError message={error} />
        <SendDigestNow />
      </Stack>
    </Form>
  )
}
