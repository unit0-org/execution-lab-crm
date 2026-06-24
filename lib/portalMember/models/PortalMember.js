import { sequelize } from '../../db/sequelize'
import { fields } from './PortalMember.fields'

// A contact's portal sign-in identity. No email/name — those live on the
// contact; we match by the contact's email at sign-in (see membershipFor).
export const PortalMember = sequelize.define('portal_member', fields, {
  tableName: 'portal_member', timestamps: false
})

PortalMember.associate = ({ Contact }) => {
  PortalMember.belongsTo(Contact, { foreignKey: 'contact_id' })
}

PortalMember.findByUser = function (userId) {
  return this.findOne({ where: { user_id: userId } })
}

PortalMember.findByContact = function (contactId) {
  return this.findOne({ where: { contact_id: contactId } })
}

PortalMember.prototype.linkUser = function (userId) {
  return this.update({ user_id: userId, status: 'active' })
}
