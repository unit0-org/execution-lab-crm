'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { BirthdayField } from '@/ui/molecules/BirthdayField'
import { FormError } from './FormError'
import { FormActions } from '@/ui/molecules/FormActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { setBirthdayAction } from '../actions/setBirthday'

export function EditBirthdayForm(props) {
  const { contactId, day, month, year, onSaved, onCancel } = props
  const { action, error } = useFormAction(setBirthdayAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>Edit birthday</Heading>
        <BirthdayField day={day} month={month} year={year} />
        <FormError message={error} />
        <FormActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
