import { Organization } from './Organization'
import { OrganizationUser } from './OrganizationUser'

const models = { Organization, OrganizationUser }

Organization.associate(models)
OrganizationUser.associate(models)

export { Organization, OrganizationUser }
