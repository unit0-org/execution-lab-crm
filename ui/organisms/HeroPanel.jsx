import {
  panelStyle, stripeStyle, mainStyle, asideStyle
} from './HeroPanel.styles'

/**
 * Featured-cohort panel: a glowing tone-bordered surface with a brand
 * gradient edge; `main`/`aside` sit side by side, stacking on mobile.
 */
export function HeroPanel({ tone = 'launch', main, aside }) {
  return (
    <div style={panelStyle(tone)}>
      <span style={stripeStyle} />
      <div style={mainStyle}>{main}</div>
      <div style={asideStyle(tone)}>{aside}</div>
    </div>
  )
}
