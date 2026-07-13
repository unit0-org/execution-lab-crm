import { LinkCard } from '@/ui/atoms/LinkCard'
import { Heading } from '@/ui/atoms/Heading'
import { OfferCardMeta } from './OfferCardMeta'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { bodyStyle } from './OfferCard.styles'

// One offer as a square-ish, whole-clickable card: its name over a footer
// with the version badge, created date, and an actions menu.
export function OfferCardLink({ offer, onShare, onRemove }) {
  const href = portalRoutePath('/tools/offer-levers/' + offer.id)
  const name = offer.name || 'Untitled offer'

  return (
    <LinkCard href={href} label={'Open ' + name}>
      <div style={bodyStyle}>
        <Heading level={3} gutter="none">{name}</Heading>
        <OfferCardMeta offer={offer} onShare={onShare} onRemove={onRemove} />
      </div>
    </LinkCard>
  )
}
