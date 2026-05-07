import { identityChipStyle, identityDotStyle } from './IdentityChip.styles'

export function IdentityChip({ label, interactive }) {
  const props = interactive ? { 'data-chip-interactive': '' } : {}
  return (
    <div style={identityChipStyle(interactive)} title={label} {...props}>
      <span style={identityDotStyle} aria-hidden />
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  )
}
