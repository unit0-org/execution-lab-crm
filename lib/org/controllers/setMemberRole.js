import { OrganizationUser } from '../models'

export async function setMemberRole(id, role) {
  await OrganizationUser.update({ role }, { where: { id } })

  return { ok: true }
}
