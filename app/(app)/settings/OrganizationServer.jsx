import { getOrganizationProfileAction } from './actions/getOrganizationProfile'
import { OrganizationForm } from './components/OrganizationForm'

// Server-side load for the organization-info tab.
export async function OrganizationServer() {
  const profile = await getOrganizationProfileAction()
  const data = profile || {}

  return <OrganizationForm profile={data} />
}
