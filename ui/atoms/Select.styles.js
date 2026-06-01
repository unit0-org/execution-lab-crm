import { inputStyle } from './TextField.styles'
import { space } from '../tokens/space'
import { color } from '../tokens/color'

export const selectStyle = {
  ...inputStyle(),
  appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
  paddingRight: space[8]
}

export const chevronStyle = {
  position: 'absolute', top: '50%', right: space[3],
  transform: 'translateY(-50%)',
  pointerEvents: 'none', color: color.text.muted
}
