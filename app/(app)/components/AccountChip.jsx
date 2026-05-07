import { chipStyle, dotStyle } from './AccountChip.styles'

export function AccountChip({ email }) {
  return (
    <div style={chipStyle} title={email}>
      <span style={dotStyle} aria-hidden />
      {email}
    </div>
  )
}
