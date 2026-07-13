import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { shareWith } from './classMethods/shareWith'
import { unshare } from './classMethods/unshare'
import { isSharedWith } from './classMethods/isSharedWith'
import { contactIdsForOffer } from './classMethods/contactIdsForOffer'
import { offerIdsForContact } from './classMethods/offerIdsForContact'

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

Object.assign(OfferShare, {
  shareWith, unshare, isSharedWith, contactIdsForOffer, offerIdsForContact
})
