import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'
import { RaisedControl } from '@/ui/atoms/RaisedControl'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { footerStyle, metaLeadStyle } from './OfferCard.styles'
import { versionLabel } from '../versionLabel'

// A card's footer: version badge + created date on the left, delete on the
// right (raised above the card link so it stays clickable).
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
        <IconButton label="Delete offer" onClick={() => onRemove(offer)}>
          <Icon name="trash" size={16} />
        </IconButton>
      </RaisedControl>
    </div>
  )
}
