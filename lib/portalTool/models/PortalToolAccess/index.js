import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { keysForContact } from './classMethods/keysForContact'
import { rowsForContacts } from './classMethods/rowsForContacts'
import { grant } from './classMethods/grant'
import { revoke } from './classMethods/revoke'

// A grant of one portal tool to one contact. No name/email — match the
// contact by id (see membershipFor). Folded on contact merge.
export const PortalToolAccess = sequelize.define(
  'portal_tool_access', fields,
  { tableName: 'portal_tool_access', timestamps: false }
)

PortalToolAccess.associate = ({ Contact }) => {
  PortalToolAccess.belongsTo(Contact, { foreignKey: 'contact_id' })
}

Object.assign(PortalToolAccess, {
  keysForContact, rowsForContacts, grant, revoke
})
