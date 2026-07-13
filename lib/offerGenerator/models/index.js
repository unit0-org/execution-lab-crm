import { Contact } from '@/lib/contact/models'
import { Offer } from './Offer'
import { OfferGeneratorInput } from './OfferGeneratorInput'
import { OfferShare } from './OfferShare'
import { OfferComment } from './OfferComment'
import { OfferCommentMention } from './OfferCommentMention'

Offer.associate({ Contact, OfferGeneratorInput })
OfferGeneratorInput.associate({ Offer })
OfferShare.associate({ Contact, Offer })
OfferComment.associate({ Contact, Offer, OfferCommentMention })
OfferCommentMention.associate({ Contact, OfferComment })

export {
  Offer, OfferGeneratorInput, OfferShare, OfferComment, OfferCommentMention
}
