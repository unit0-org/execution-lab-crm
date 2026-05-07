import { identityChipStyle, identityDotStyle } from './IdentityChip.styles'

// Compact "who" chip — used for connected accounts in the sidebar
// and anywhere we want a dot + truncated identifier.
export function IdentityChip({ label }) {
  return (
    <div style={identityChipStyle} title={label}>
      <span style={identityDotStyle} aria-hidden />
      {label}
    </div>
  )
}
