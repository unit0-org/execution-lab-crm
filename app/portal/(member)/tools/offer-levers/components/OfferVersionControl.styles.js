import { space } from '@/ui/tokens/space'
import { inputStyle } from '@/ui/atoms/TextField.styles'

// The box reuses the name input's styling (border, radius, sunken fill,
// font) so the two fields match exactly; laid out inline with tight steppers
// whose short buttons keep the box the same height as the input.
export const boxStyle = {
  ...inputStyle(),
  width: 'auto', display: 'inline-flex', alignItems: 'center',
  gap: space[1], padding: `${space[1]} ${space[2]}`
}

// One version part: the number flanked by its down/up chevrons.
export const partStyle = { display: 'inline-flex', alignItems: 'center' }
