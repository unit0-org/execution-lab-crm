'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { CloseButton } from './CloseButton'
import { HiddenFields } from './HiddenFields'
import { FormError } from './FormError'
import { SaveSlot } from './SaveSlot'
import { useDraft } from '../hooks/useDraft'
import { useFormAction } from '../hooks/useFormAction'

export function FieldEdit({ label, value, action, hidden, onSaved, onCancel }) {
  const { draft, dirty, change } = useDraft(value)
  const save = useFormAction(action, () => onSaved(draft))
  const cancel = <CloseButton onClick={onCancel} />

  return (
    <Form action={save.action}>
      <HiddenFields fields={hidden} />
      <TextField label={label} name="value" value={draft}
        onChange={change} autoFocus trailing={cancel} />
      <FormError message={save.error} />
      <SaveSlot dirty={dirty} />
    </Form>
  )
}
