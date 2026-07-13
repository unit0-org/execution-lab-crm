import { sequelize } from '../../db/sequelize'
import { fields } from './OfferComment.fields'
import { addStatics } from './OfferComment.statics'

// One comment on an offer's discussion thread. Contact-owned via
// author_contact_id — folded in by contact-merge (mergeOfferComments); rows
// cascade-delete with the offer or the author.
export const OfferComment = sequelize.define(
  'offer_comment', fields,
  { tableName: 'offer_comment', timestamps: false }
)

OfferComment.associate = ({ Contact, Offer, OfferCommentMention }) => {
  OfferComment.belongsTo(Contact, {
    foreignKey: 'author_contact_id', as: 'author'
  })
  OfferComment.belongsTo(Offer, { foreignKey: 'offer_id' })
  OfferComment.hasMany(OfferCommentMention, { foreignKey: 'offer_comment_id' })
}

addStatics(OfferComment)
