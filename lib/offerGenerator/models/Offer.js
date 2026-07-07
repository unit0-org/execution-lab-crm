import { sequelize } from '../../db/sequelize'
import { fields } from './Offer.fields'
import { addStatics } from './Offer.statics'
import { addVersionStatics } from './Offer.versionStatics'

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

addStatics(Offer)
addVersionStatics(Offer)
