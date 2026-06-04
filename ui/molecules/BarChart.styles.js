import { color } from '../tokens/color'
import { CHART_HEIGHT, CHART_FOOTER } from './chartDims'

const total = CHART_HEIGHT + CHART_FOOTER

export const wrapStyle = { width: '100%', height: total, overflow: 'hidden' }

export const svgStyle = {
  display: 'block', width: '100%', overflow: 'visible'
}

export const barRectStyle = { fill: color.accent.solid }

export const barLabelStyle = {
  fill: color.text.muted,
  fontSize: '10px',
  fontFamily: 'var(--font-mono)'
}

export const emptyStyle = {
  height: total,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: color.text.muted,
  fontSize: '14px'
}
