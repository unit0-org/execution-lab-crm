import { panelStyle, stripeStyle } from './AccentPanel.styles'

/**
 * Glowing tone-bordered surface with a brand gradient top stripe — for
 * confirmation/celebration cards.
 */
export function AccentPanel({ tone = 'mint', children }) {
  return (
    <div style={panelStyle(tone)}>
      <span style={stripeStyle} />
      {children}
    </div>
  )
}
