import { OrganizationUser } from '../models'

export async function removeMember(id) {
  await OrganizationUser.destroy({ where: { id } })

  return { ok: true }
}
