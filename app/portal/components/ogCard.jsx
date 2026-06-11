import { ogStyles } from './ogCardStyles'

const META = '8-week online cohort  |  The Execution Lab'

// The portal's social-share card, rendered to an image by next/og. Text is
// kept ASCII so the default Satori font never hits a missing glyph.
export function ogCard() {
  return (
    <div style={ogStyles.frame}>
      <div style={ogStyles.kicker}>INCOME FIRST</div>
      <div style={ogStyles.title}>FUNDAMENTALS</div>
      <div style={ogStyles.title}>REGISTRATION</div>
      <div style={ogStyles.meta}>{META}</div>
    </div>
  )
}
