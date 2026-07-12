import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { footerStyle, metaLeadStyle } from './OfferCard.styles'
import { versionLabel } from '../versionLabel'

const sharedBy = (offer) =>
  offer.ownerName ? 'Shared by ' + offer.ownerName : 'Shared with you'

// A shared card's footer: version badge and who shared it — no edit menu.
export function SharedOfferMeta({ offer }) {
  return (
    <div style={footerStyle}>
      <div style={metaLeadStyle}>
        <Badge tone="neutral">{versionLabel(offer)}</Badge>
        <Text tone="muted" size="sm">{sharedBy(offer)}</Text>
      </div>
    </div>
  )
}
