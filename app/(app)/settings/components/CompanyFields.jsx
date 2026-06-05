import { CompanyIdentityFields } from './CompanyIdentityFields'
import { CompanyAddressFields } from './CompanyAddressFields'

export function CompanyFields({ profile }) {
  return (
    <>
      <CompanyIdentityFields profile={profile} />
      <CompanyAddressFields profile={profile} />
    </>
  )
}
