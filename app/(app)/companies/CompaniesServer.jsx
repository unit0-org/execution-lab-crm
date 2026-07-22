import { listCompaniesAction } from './actions/listCompanies'
import { CompaniesView } from './components/CompaniesView'

// Server-side initial load for the companies list, seeded into the client
// view so it renders complete without skeletons.
export async function CompaniesServer() {
  const companies = await listCompaniesAction()

  return <CompaniesView initialCompanies={companies} />
}
