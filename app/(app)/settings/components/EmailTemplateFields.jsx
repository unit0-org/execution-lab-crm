import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FormError } from '@/ui/molecules/FormError'

export function EmailTemplateFields({ draft, error }) {
  return (
    <Stack gap="sm">
      <TextField
        label="Subject"
        name="subject"
        value={draft.subject}
        onChange={draft.onSubject}
      />
      <TextArea
        label="Body — plain text, blank line starts a paragraph"
        name="body"
        rows={10}
        value={draft.body}
        onChange={draft.onBody}
      />
      <SubmitButton tone="primary" disabled={!draft.changed}>
        Save
      </SubmitButton>
      <FormError message={error} />
    </Stack>
  )
}
