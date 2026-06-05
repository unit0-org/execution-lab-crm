import { TextField } from '@/ui/atoms/TextField'

// Create-only meeting inputs that the edit form doesn't expose.
export function ExtraMeetingFields() {
  return (
    <>
      <TextField label="Ends (optional)" name="ends_at"
        type="datetime-local" />
      <TextField label="Attendees" name="emails"
        placeholder="Emails, comma-separated" />
    </>
  )
}
