import { TextField } from '@/ui/atoms/TextField'

export function OrganizationIdentityFields({ profile }) {
  return (
    <>
      <TextField name="legal_name" placeholder="Legal name"
        defaultValue={profile.legal_name} />
      <TextField name="email" placeholder="Email"
        defaultValue={profile.email} />
      <TextField name="phone" placeholder="Phone"
        defaultValue={profile.phone} />
      <TextField name="tax_id" placeholder="Tax ID"
        defaultValue={profile.tax_id} />
    </>
  )
}
