import { getCompanyAction } from '../actions/getCompany'
import { companyContactsAction } from '../actions/companyContacts'
import { companyInvoicesAction } from '../actions/companyInvoices'
import { CompanyDetailView } from '../components/CompanyDetailView'

// Server-side load for one company and its contacts, seeded into the client
// view so it renders complete without skeletons.
export async function CompanyDetailServer({ params }) {
  const { id } = await params
  const company = await getCompanyAction(id)

  if (!company) return <CompanyDetailView initialCompany={null} />

  const contacts = await companyContactsAction(id)
  const invoices = await companyInvoicesAction(id)

  return (
    <CompanyDetailView initialCompany={company} initialContacts={contacts}
      initialInvoices={invoices} />
  )
}
