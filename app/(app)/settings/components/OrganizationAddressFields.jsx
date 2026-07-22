import { TextField } from '@/ui/atoms/TextField'

export function OrganizationAddressFields({ profile }) {
  return (
    <>
      <TextField name="address_line1" placeholder="Address line 1"
        defaultValue={profile.address_line1} />
      <TextField name="address_line2" placeholder="Address line 2"
        defaultValue={profile.address_line2} />
      <TextField name="city" placeholder="City"
        defaultValue={profile.city} />
      <TextField name="region" placeholder="Province / State"
        defaultValue={profile.region} />
      <TextField name="postal_code" placeholder="Postal code"
        defaultValue={profile.postal_code} />
      <TextField name="country" placeholder="Country"
        defaultValue={profile.country} />
    </>
  )
}
