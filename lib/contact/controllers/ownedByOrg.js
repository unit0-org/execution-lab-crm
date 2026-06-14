import { Contact } from '@/lib/contact/models'

// True when a child row (id) is owned by a contact in the given org.
// Child tables (phone, fact, note) carry no organization_id, so we scope
// them transitively through their parent contact.
export async function ownedByOrg(model, id, organizationId) {
  const row = await model.findOne({
    where: { id },
    include: [{
      model: Contact,
      required: true,
      where: { organization_id: organizationId }
    }]
  })

  return Boolean(row)
}
