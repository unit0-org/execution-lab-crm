'use client'

import { Form } from '@/ui/Form'
import { Field } from '@/ui/Field'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { useCreateContactType } from '../hooks/useCreateContactType'
import { ColorPicker } from './ColorPicker'
import { CreateStatus } from './CreateStatus'

export function CreateForm() {
  const { action, state } = useCreateContactType()

  return (
    <>
      <CreateStatus state={state} />
      <Form action={action}>
        <Field htmlFor="name" label="Type name">
          <Input id="name" name="name" required />
        </Field>
        <ColorPicker />
        <Button type="submit" tone="primary">Create type</Button>
      </Form>
    </>
  )
}
