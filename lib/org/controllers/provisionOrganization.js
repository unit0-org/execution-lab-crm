import { Organization, OrganizationUser } from '../models'

// Create a new organization with the given user as its admin.
export async function provisionOrganization(name, userId) {
  const org = await Organization.create({ name })

  await OrganizationUser.create({
    organization_id: org.id,
    user_id: userId,
    role: 'admin'
  })

  return org.toJSON()
}
