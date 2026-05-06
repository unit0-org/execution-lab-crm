import { space } from './tokens/space'

const GUTTERS = { none: 0, sm: space[2], md: space[4], lg: space[8] }

export function Section({ gutter = 'lg', children }) {
  return <section style={{ marginBottom: GUTTERS[gutter] }}>{children}</section>
}
