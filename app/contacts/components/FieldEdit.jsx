'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { useDraft } from '../hooks/useDraft'
import { useFieldSave } from '../hooks/useFieldSave'
import { SaveSlot } from './SaveSlot'

export function FieldEdit({ contactId, field, label, value, onSaved }) {
  const { draft, dirty, change } = useDraft(value)
  const { action } = useFieldSave(() => onSaved(draft))

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={contactId} />
      <input type="hidden" name="field" value={field} />
      <Stack gap="sm">
        <TextField label={label} name="value" value={draft}
          onChange={change} autoFocus />
        <SaveSlot dirty={dirty} />
      </Stack>
    </Form>
  )
}
