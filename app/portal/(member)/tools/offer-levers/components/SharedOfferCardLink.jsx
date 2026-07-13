import { LinkCard } from '@/ui/atoms/LinkCard'
import { Heading } from '@/ui/atoms/Heading'
import { SharedOfferMeta } from './SharedOfferMeta'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { bodyStyle } from './OfferCard.styles'

// A shared offer card: its name over a footer with the version and who
// shared it. The whole surface opens the read-only view.
export function SharedOfferCardLink({ offer }) {
  const href = portalRoutePath('/tools/offer-levers/' + offer.id)
  const name = offer.name || 'Untitled offer'

  return (
    <LinkCard href={href} label={'Open ' + name}>
      <div style={bodyStyle}>
        <Heading level={3} gutter="none">{name}</Heading>
        <SharedOfferMeta offer={offer} />
      </div>
    </LinkCard>
  )
}
