import { registerListCompanies } from './listCompanies'
import { registerSearchCompanies } from './searchCompanies'
import { registerGetCompany } from './getCompany'
import { registerCreateCompany } from './createCompany'
import { registerUpdateCompany } from './updateCompany'
import { registerDeleteCompany } from './deleteCompany'
import { registerListCompanyContacts } from './listCompanyContacts'
import { registerAddCompanyContact } from './addCompanyContact'
import { registerRemoveCompanyContact } from './removeCompanyContact'

// Company CRUD, search and contact-link tools.
export function registerCompanyTools(server) {
  registerListCompanies(server)
  registerSearchCompanies(server)
  registerGetCompany(server)
  registerCreateCompany(server)
  registerUpdateCompany(server)
  registerDeleteCompany(server)
  registerListCompanyContacts(server)
  registerAddCompanyContact(server)
  registerRemoveCompanyContact(server)
}
