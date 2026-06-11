import { panelStyle, stripeStyle } from './AccentPanel.styles'

// A glowing, tone-bordered surface with a brand gradient top stripe — for
// celebratory/confirmation cards.
export function AccentPanel({ tone = 'mint', children }) {
  return (
    <div style={panelStyle(tone)}>
      <span style={stripeStyle} />
      {children}
    </div>
  )
}
