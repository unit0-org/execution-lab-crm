import { sequelize } from '../../../db/sequelize'
import { fields } from './fields'
import { recordFor } from './classMethods/recordFor'

// A contact @-tagged in an offer comment. Contact-owned via
// mentioned_contact_id — folded in by contact-merge
// (mergeOfferCommentMentions); rows cascade with the comment or the contact.
export const OfferCommentMention = sequelize.define(
  'offer_comment_mention', fields,
  { tableName: 'offer_comment_mention', timestamps: false }
)

OfferCommentMention.associate = ({ Contact, OfferComment }) => {
  OfferCommentMention.belongsTo(Contact, {
    foreignKey: 'mentioned_contact_id'
  })
  OfferCommentMention.belongsTo(OfferComment, {
    foreignKey: 'offer_comment_id'
  })
}

Object.assign(OfferCommentMention, { recordFor })
