import { Organization } from './Organization'
import { OrganizationUser } from './OrganizationUser'
import { OrganizationSecret } from './OrganizationSecret'

const models = { Organization, OrganizationUser }

Organization.associate(models)
OrganizationUser.associate(models)

export { Organization, OrganizationUser, OrganizationSecret }
