import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { VersionDigit } from './VersionDigit'
import { VersionLabel } from './VersionLabel'
import { fieldStyle } from '@/ui/atoms/TextField.styles'
import { boxStyle } from './OfferVersionControl.styles'

// The offer's editable version on the edit page: a stepper box that matches
// the name field — same label style, border, fill, and height. Each part
// bumps up or down; floored at V1.0.
export function OfferVersionControl({ version, onBump }) {
  return (
    <div style={fieldStyle}>
      <VersionLabel />
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
