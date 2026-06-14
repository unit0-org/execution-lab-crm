import { Contact } from '@/lib/contact/models'

export async function setBirthday(organizationId, id, parts) {
  await Contact.update(parts, {
    where: { id, organization_id: organizationId }
  })

  return { ok: true }
}
