import { TextField } from '@/ui/atoms/TextField'
import { AttendeesField } from './AttendeesField'

// Create-only meeting inputs that the edit form doesn't expose.
export function ExtraMeetingFields() {
  return (
    <>
      <TextField label="Ends (optional)" name="ends_at"
        type="datetime-local" />
      <AttendeesField />
    </>
  )
}
