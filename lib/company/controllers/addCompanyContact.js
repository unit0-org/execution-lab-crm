import { CompanyContact } from '@/lib/company/models'

// Link a contact to a company with a role, updating the role if the link
// already exists.
export async function addCompanyContact(companyId, contactId, role) {
  const [link] = await CompanyContact.findOrCreate({
    where: { company_id: companyId, contact_id: contactId },
    defaults: { role }
  })

  if (link.role !== role) await link.update({ role })

  return { ok: true }
}
