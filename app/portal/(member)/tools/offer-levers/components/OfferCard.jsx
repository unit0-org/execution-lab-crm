import { LinkCard } from '@/ui/atoms/LinkCard'
import { Heading } from '@/ui/atoms/Heading'
import { OfferCardMeta } from './OfferCardMeta'
import { OfferVersion } from './OfferVersion'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { bodyStyle } from './OfferCard.styles'

// One offer as a square-ish, whole-clickable card: its name over a footer
// with the created date and a delete control.
export function OfferCard({ offer, onRemove, onBumpVersion }) {
  const href = portalRoutePath('/tools/offer-levers/' + offer.id)
  const name = offer.name || 'Untitled offer'

  return (
    <LinkCard href={href} label={'Open ' + name}>
      <div style={bodyStyle}>
        <Heading level={3} gutter="none">{name}</Heading>
        <OfferVersion offer={offer} onBump={onBumpVersion} />
        <OfferCardMeta offer={offer} onRemove={onRemove} />
      </div>
    </LinkCard>
  )
}
