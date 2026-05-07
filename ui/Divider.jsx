import { color } from './tokens/color'
import { space } from './tokens/space'

const TONES = {
  default: color.border.default,
  soft:    color.border.soft,
  strong:  color.border.strong,
}

const style = (tone, gutter) => ({
  height: 0,
  border: 'none',
  borderTop: `1px solid ${TONES[tone]}`,
  margin: `${space[gutter] || space[4]} 0`,
})

export function Divider({ tone = 'default', gutter = 4 }) {
  return <hr style={style(tone, gutter)} aria-hidden />
}
