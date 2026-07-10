import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'
import { RaisedControl } from '@/ui/atoms/RaisedControl'
import { OfferCardMenu } from './OfferCardMenu'
import { footerStyle, metaLeadStyle } from './OfferCard.styles'
import { versionLabel } from '../versionLabel'

// A card's footer: version badge + created date on the left, a three-dot
// actions menu on the right (raised above the card link so it stays usable).
export function OfferCardMeta({ offer, onRemove }) {
  return (
    <div style={footerStyle}>
      <div style={metaLeadStyle}>
        <Badge tone="neutral">{versionLabel(offer)}</Badge>
        <Text tone="muted" size="sm">
          <DateText value={offer.created_at} />
        </Text>
      </div>
      <RaisedControl>
        <OfferCardMenu offer={offer} onRemove={onRemove} />
      </RaisedControl>
    </div>
  )
}
