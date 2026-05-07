import { cardStyle, eyebrowStyle, bodyStyle } from './BriefingCard.styles'

export function BriefingCard({ eyebrow = 'Today', children }) {
  return (
    <section style={cardStyle}>
      <div style={eyebrowStyle}>{eyebrow}</div>
      <p style={bodyStyle}>{children}</p>
    </section>
  )
}
