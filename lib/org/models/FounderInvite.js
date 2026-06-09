import { randomBytes } from 'crypto'
import { sequelize } from '../../db/sequelize'
import { founderInviteFields } from './founderInvite.fields'

export const FounderInvite = sequelize.define('founder_invite',
  founderInviteFields, { tableName: 'founder_invite', timestamps: false })

FounderInvite.beforeCreate((invite) => {
  invite.token = invite.token || randomBytes(24).toString('base64url')
})

FounderInvite.prototype.isPending = function () {
  return !this.accepted_at
}

FounderInvite.prototype.markAccepted = function (userId, organizationId) {
  return this.update({
    accepted_by_user_id: userId,
    organization_id: organizationId,
    accepted_at: new Date()
  })
}
