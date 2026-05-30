'use client'

import { Form } from '@/ui/Form'
import { Field } from '@/ui/Field'
import { Input } from '@/ui/Input'
import { SubmitButton } from '@/ui/SubmitButton'
import { useCreateLabel } from '../hooks/useCreateLabel'
import { ColorPicker } from './ColorPicker'
import { CreateLabelStatus } from './CreateLabelStatus'

export function CreateLabelForm() {
  const { action, state } = useCreateLabel()
  return (
    <>
      <CreateLabelStatus state={state} />
      <Form action={action}>
        <Field htmlFor="name" label="Label name">
          <Input id="name" name="name" required />
        </Field>
        <ColorPicker />
        <SubmitButton tone="primary">Create label</SubmitButton>
      </Form>
    </>
  )
}
