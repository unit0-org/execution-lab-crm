import { Contact } from '@/lib/contact/models'
import { Offer } from './Offer'
import { OfferGeneratorInput } from './OfferGeneratorInput'

Offer.associate({ Contact, OfferGeneratorInput })
OfferGeneratorInput.associate({ Offer })

export { Offer, OfferGeneratorInput }
