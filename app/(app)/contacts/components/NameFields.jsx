import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'

export function NameFields({ contact }) {
  const first = contact.first_name || ''
  const last = contact.last_name || ''

  return (
    <Stack gap="sm">
      <TextField label="First name" name="first_name"
        defaultValue={first} autoFocus />
      <TextField label="Last name" name="last_name"
        defaultValue={last} />
    </Stack>
  )
}
