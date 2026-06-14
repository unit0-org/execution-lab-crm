import { ContactEmail } from '@/lib/contact/models'

export async function removeEmail(organizationId, id) {
  await ContactEmail.destroy({
    where: { id, organization_id: organizationId }
  })

  return { ok: true }
}
