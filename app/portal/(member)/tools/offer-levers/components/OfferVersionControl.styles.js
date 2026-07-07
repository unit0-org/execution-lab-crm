import { space } from '@/ui/tokens/space'

// The version field on the edit page: a label above a row of steppers.
export const fieldStyle = {
  display: 'flex', flexDirection: 'column', gap: space[2],
  alignItems: 'flex-start'
}

// The stepper row: the two parts (major, minor) laid out left to right.
export const rowStyle = {
  display: 'flex', alignItems: 'center', gap: space[1]
}

// One version part: up chevron, number, down chevron stacked and centered.
export const digitStyle = {
  display: 'flex', flexDirection: 'column', alignItems: 'center'
}
