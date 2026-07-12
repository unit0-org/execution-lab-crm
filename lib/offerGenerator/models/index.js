import { Contact } from '@/lib/contact/models'
import { Offer } from './Offer'
import { OfferGeneratorInput } from './OfferGeneratorInput'
import { OfferShare } from './OfferShare'

Offer.associate({ Contact, OfferGeneratorInput })
OfferGeneratorInput.associate({ Offer })
OfferShare.associate({ Contact, Offer })

export { Offer, OfferGeneratorInput, OfferShare }
