import { Contact } from '@/lib/db/models'

export async function updateContact(organizationId, id, fields) {
  await Contact.update(fields, {
    where: { id, organization_id: organizationId }
  })

  return { ok: true }
}
