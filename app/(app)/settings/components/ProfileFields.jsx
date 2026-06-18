import { TextField } from '@/ui/atoms/TextField'

// Display name is editable (it's how teammates see you in mentions); email
// is read-only since it comes from your sign-in account.
export function ProfileFields({ profile }) {
  const name = profile.displayName || ''
  const email = profile.email || ''

  return (
    <>
      <TextField label="Display name" name="display_name"
        defaultValue={name} />
      <TextField label="Email" defaultValue={email} disabled />
    </>
  )
}
