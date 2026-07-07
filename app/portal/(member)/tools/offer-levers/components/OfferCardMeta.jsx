import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { RaisedControl } from '@/ui/atoms/RaisedControl'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { footerStyle } from './OfferCard.styles'

// A card's footer: created date on the left, delete on the right (raised
// above the card link so it stays clickable).
export function OfferCardMeta({ offer, onRemove }) {
  return (
    <div style={footerStyle}>
      <Text tone="muted" size="sm">
        <DateText value={offer.created_at} />
      </Text>
      <RaisedControl>
        <IconButton label="Delete offer" onClick={() => onRemove(offer)}>
          <Icon name="trash" size={16} />
        </IconButton>
      </RaisedControl>
    </div>
  )
}
