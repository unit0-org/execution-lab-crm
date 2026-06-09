import { Organization, OrganizationUser } from '../models'
import { seedOrgDefaults } from './seedOrgDefaults'

// Create a new organization with the given user as its admin, seeded with
// the default relationship and event types.
export async function provisionOrganization(name, userId) {
  const org = await Organization.create({ name })

  await OrganizationUser.create({
    organization_id: org.id,
    user_id: userId,
    role: 'admin'
  })
  await seedOrgDefaults(org.id)

  return org.toJSON()
}
