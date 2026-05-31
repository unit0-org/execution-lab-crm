'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { Stack } from '@/ui/layout/Stack'
import { EmailFields } from './EmailFields'
import { FormError } from './FormError'
import { useContactForm } from '../hooks/useContactForm'

export function ContactForm() {
  const { action, error } = useContactForm()

  return (
    <Form action={action}>
      <Stack gap="md">
        <TextField label="First name" name="first_name" />
        <TextField label="Last name" name="last_name" />
        <EmailFields />
        <FormError message={error} />
        <SubmitButton tone="primary">Create contact</SubmitButton>
      </Stack>
    </Form>
  )
}
