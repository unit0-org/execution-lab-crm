'use client'

import { Field } from '@/ui/Field'
import { Input } from '@/ui/Input'
import { useNowDateTime } from '../hooks/useNowDateTime'

export function OccurredAtField() {
  const now = useNowDateTime()
  return (
    <Field htmlFor="occurred_at" label="When">
      <Input id="occurred_at" name="occurred_at" type="datetime-local" defaultValue={now} required />
    </Field>
  )
}
