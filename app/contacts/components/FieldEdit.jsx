'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { Inline } from '@/ui/layout/Inline'
import { HiddenFields } from './HiddenFields'
import { SaveSlot } from './SaveSlot'
import { useDraft } from '../hooks/useDraft'
import { useFormAction } from '../hooks/useFormAction'

export function FieldEdit({ label, value, action, hidden, onSaved, onCancel }) {
  const { draft, dirty, change } = useDraft(value)
  const save = useFormAction(action, () => onSaved(draft))

  return (
    <Form action={save.action}>
      <HiddenFields fields={hidden} />
      <TextField label={label} name="value" value={draft}
        onChange={change} autoFocus />
      <Inline gap="sm">
        <SaveSlot dirty={dirty} />
        <Button type="button" size="sm" onClick={onCancel}>Cancel</Button>
      </Inline>
    </Form>
  )
}
