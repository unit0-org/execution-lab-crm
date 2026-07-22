import { CompanyContact } from '@/lib/company/models'

// Unlink a contact from a company.
export function removeCompanyContact(companyId, contactId) {
  return CompanyContact.destroy({
    where: { company_id: companyId, contact_id: contactId }
  })
}
