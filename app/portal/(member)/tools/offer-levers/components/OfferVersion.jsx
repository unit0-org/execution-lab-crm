import { Text } from '@/ui/atoms/Text'
import { RaisedControl } from '@/ui/atoms/RaisedControl'
import { VersionDigit } from './VersionDigit'
import { rowStyle } from './OfferVersion.styles'

// The offer's V{major}.{minor}, shown as two steppers so the member can
// bump each part up or down right on the card. Raised above the card link.
export function OfferVersion({ offer, onBump }) {
  return (
    <RaisedControl>
      <div style={rowStyle}>
        <Text size="sm" tone="muted">V</Text>
        <VersionDigit label="major version" value={offer.version_major}
          onUp={() => onBump(offer.id, 1, 0)}
          onDown={() => onBump(offer.id, -1, 0)} />
        <Text size="sm" tone="muted">.</Text>
        <VersionDigit label="minor version" value={offer.version_minor}
          onUp={() => onBump(offer.id, 0, 1)}
          onDown={() => onBump(offer.id, 0, -1)} />
      </div>
    </RaisedControl>
  )
}
