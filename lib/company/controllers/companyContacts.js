import { CompanyContact } from '@/lib/company/models'
import { Contact, ContactEmail } from '@/lib/contact/models'

// A company's linked contacts with their role, for the company page.
export async function companyContacts(companyId) {
  const rows = await CompanyContact.findAll({
    where: { company_id: companyId },
    include: [{
      model: Contact, as: 'contact',
      include: [{ model: ContactEmail, as: 'contact_email' }]
    }]
  })

  return rows.map((r) => r.toJSON())
}
