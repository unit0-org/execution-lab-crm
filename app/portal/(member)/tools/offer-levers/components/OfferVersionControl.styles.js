import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'
import { radius } from '@/ui/tokens/radius'

// The version field: a label above a compact bordered stepper box.
export const fieldStyle = { display: 'grid', gap: space[1] }

// The box mirrors the name input: same sunken fill, border, and radius, so
// the two controls read as siblings on the row.
export const boxStyle = {
  display: 'inline-flex', alignItems: 'center', gap: space[1],
  padding: `${space[1]} ${space[2]}`, background: color.bg.sunken,
  borderRadius: radius.md, border: `1px solid ${color.border.default}`
}

// One version part: the number flanked by its down/up chevrons.
export const partStyle = { display: 'inline-flex', alignItems: 'center' }
