import { OfferContextSection } from './OfferContextSection'
import { LeversSection } from './LeversSection'
import { GeneratedOffersSection } from './GeneratedOffersSection'

// The editable body: offer context, the levers, and generated offers.
export function OfferLeversBody({ offer, on }) {
  return (
    <>
      <OfferContextSection values={offer.values} lists={offer.lists}
        saved={offer.saved} on={on} />
      <LeversSection values={offer.values} onField={offer.setLever}
        onCopy={offer.copyPrompt} />
      <GeneratedOffersSection lists={offer.lists} saved={offer.saved}
        on={on} />
    </>
  )
}
