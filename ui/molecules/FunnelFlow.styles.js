import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { radius } from '../tokens/radius'
import { fontSize } from '../tokens/typography'
import { toneColor } from '../tokens/tone'

// Stages flow left-to-right and wrap to a stack on narrow screens, where
// a row of three would squeeze each stage past readable.
export const flowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  gap: space[2]
}

export const stageStyle = (tone) => ({
  flex: '1 1 220px',
  minWidth: 0,
  padding: space[4],
  borderRadius: radius.lg,
  border: `1px solid ${color.border.soft}`,
  borderTop: `3px solid ${toneColor[tone] || color.border.strong}`,
  background: color.bg.surface,
  boxSizing: 'border-box'
})

export const stageCaption = {
  marginTop: space[2],
  fontSize: fontSize.xs,
  color: color.text.muted
}
