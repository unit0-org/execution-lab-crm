import { color } from '../tokens/color'
import { space } from '../tokens/space'
import { fontSize } from '../tokens/typography'

// Stages flow left-to-right and wrap to a stack on narrow screens, where
// a row of three would squeeze each stage past readable.
export const flowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  gap: space[2]
}

// Sizing only — the stage's surface is a Card, so its border, tone stripe,
// padding and background are never restated here.
export const stageStyle = {
  flex: '1 1 220px',
  minWidth: 0
}

export const stageCaption = {
  marginTop: space[2],
  fontSize: fontSize.xs,
  color: color.text.muted
}
