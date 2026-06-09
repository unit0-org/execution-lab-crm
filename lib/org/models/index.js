import { Organization } from './Organization'
import { OrganizationUser } from './OrganizationUser'
import { OrganizationSecret } from './OrganizationSecret'
import { FounderInvite } from './FounderInvite'

const models = { Organization, OrganizationUser }

Organization.associate(models)
OrganizationUser.associate(models)

export { Organization, OrganizationUser, OrganizationSecret, FounderInvite }
