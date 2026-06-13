import { getCompanyProfileAction } from './actions/getCompanyProfile'
import { CompanyForm } from './components/CompanyForm'

// Server-side load for the company-info tab.
export async function CompanyServer() {
  const profile = await getCompanyProfileAction()
  const data = profile || {}

  return <CompanyForm profile={data} />
}
