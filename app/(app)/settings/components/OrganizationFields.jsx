import { OrganizationIdentityFields } from './OrganizationIdentityFields'
import { OrganizationAddressFields } from './OrganizationAddressFields'

export function OrganizationFields({ profile }) {
  return (
    <>
      <OrganizationIdentityFields profile={profile} />
      <OrganizationAddressFields profile={profile} />
    </>
  )
}
