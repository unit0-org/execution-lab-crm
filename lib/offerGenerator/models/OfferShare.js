import { sequelize } from '../../db/sequelize'
import { fields } from './OfferShare.fields'
import { addStatics } from './OfferShare.statics'

// A grant that lets another contact view + comment on an offer they don't
// own. Contact-owned on the shared-with side — folded in by contact-merge
// (mergeOfferShares); rows cascade-delete with the offer or the contact.
export const OfferShare = sequelize.define(
  'offer_share', fields,
  { tableName: 'offer_share', timestamps: false }
)

OfferShare.associate = ({ Contact, Offer }) => {
  OfferShare.belongsTo(Contact, { foreignKey: 'contact_id' })
  OfferShare.belongsTo(Offer, { foreignKey: 'offer_id' })
}

addStatics(OfferShare)
