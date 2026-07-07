import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { VersionDigit } from './VersionDigit'
import { fieldStyle, boxStyle } from './OfferVersionControl.styles'

// The offer's editable version on the edit page: a compact bordered stepper
// (V{major}.{minor}) whose two parts bump up or down. Floored at V1.0.
export function OfferVersionControl({ version, onBump }) {
  return (
    <div style={fieldStyle}>
      <MonoLabel caps>Version</MonoLabel>
      <div style={boxStyle}>
        <MonoLabel tone="primary" size={14}>V</MonoLabel>
        <VersionDigit label="major version" value={version.version_major}
          onDown={() => onBump(-1, 0)} onUp={() => onBump(1, 0)} />
        <MonoLabel tone="primary" size={14}>.</MonoLabel>
        <VersionDigit label="minor version" value={version.version_minor}
          onDown={() => onBump(0, -1)} onUp={() => onBump(0, 1)} />
      </div>
    </div>
  )
}
