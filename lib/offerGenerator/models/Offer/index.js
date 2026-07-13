import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { forContact } from './classMethods/forContact'
import { getOwned } from './classMethods/getOwned'
import { createFor } from './classMethods/createFor'
import { rename } from './classMethods/rename'
import { remove } from './classMethods/remove'
import { changeVersion } from './classMethods/changeVersion'
import { touch } from './instanceMethods/touch'

// A named offer belonging to a contact; groups that offer's configurator
// inputs. Contact-owned — reassigned to the winner on contact merge, and
// its inputs follow via offer_id (see claimContactRecords / ARCHITECTURE).
export const Offer = sequelize.define(
  'offer', fields,
  { tableName: 'offer', timestamps: false }
)

Offer.associate = ({ Contact, OfferGeneratorInput }) => {
  Offer.belongsTo(Contact, { foreignKey: 'contact_id' })
  Offer.hasMany(OfferGeneratorInput, { foreignKey: 'offer_id' })
}

Object.assign(Offer, {
  forContact, getOwned, createFor, rename, remove, changeVersion
})
Offer.prototype.touch = touch
