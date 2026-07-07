import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Text } from '@/ui/atoms/Text'
import { VersionDigit } from './VersionDigit'
import { fieldStyle, rowStyle } from './OfferVersionControl.styles'

// The offer's editable V{major}.{minor} on the edit page: a labeled pair of
// steppers so the member bumps each part up or down. Floored at V1.0
// server-side (in the Offer model).
export function OfferVersionControl({ version, onBump }) {
  return (
    <div style={fieldStyle}>
      <MonoLabel caps>Version</MonoLabel>
      <div style={rowStyle}>
        <Text size="sm" tone="muted">V</Text>
        <VersionDigit label="major version" value={version.version_major}
          onUp={() => onBump(1, 0)} onDown={() => onBump(-1, 0)} />
        <Text size="sm" tone="muted">.</Text>
        <VersionDigit label="minor version" value={version.version_minor}
          onUp={() => onBump(0, 1)} onDown={() => onBump(0, -1)} />
      </div>
    </div>
  )
}
