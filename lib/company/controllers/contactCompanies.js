import { CompanyContact, Company } from '@/lib/company/models'

// The companies a contact belongs to, with their role, for the contact
// page's Companies section.
export async function contactCompanies(contactId) {
  const rows = await CompanyContact.findAll({
    where: { contact_id: contactId },
    include: [{ model: Company, as: 'company' }]
  })

  return rows.map((r) => r.toJSON())
}
