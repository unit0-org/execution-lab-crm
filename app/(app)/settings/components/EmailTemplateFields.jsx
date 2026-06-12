import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FormError } from '@/ui/molecules/FormError'

export function EmailTemplateFields({ template, body, onBody, error }) {
  return (
    <Stack gap="sm">
      <TextField
        label="Subject"
        name="subject"
        defaultValue={template.subject}
      />
      <TextArea
        label="Body — plain text, blank line starts a paragraph"
        name="body"
        rows={10}
        value={body}
        onChange={onBody}
      />
      <SubmitButton tone="primary">Save</SubmitButton>
      <FormError message={error} />
    </Stack>
  )
}
