import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { findByUser } from './classMethods/findByUser'
import { findByContact } from './classMethods/findByContact'
import { linkUser } from './instanceMethods/linkUser'

// A contact's portal sign-in identity. No email/name — those live on the
// contact; we match by the contact's email at sign-in (see membershipFor).
export const PortalMember = sequelize.define('portal_member', fields, {
  tableName: 'portal_member', timestamps: false
})

PortalMember.associate = ({ Contact }) => {
  PortalMember.belongsTo(Contact, { foreignKey: 'contact_id' })
}

Object.assign(PortalMember, { findByUser, findByContact })
PortalMember.prototype.linkUser = linkUser
