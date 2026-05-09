import { space } from './tokens/space'

const GAPS = { xs: space[1], sm: space[2], md: space[4], lg: space[8] }

export function Stack({ gap = 'md', children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: GAPS[gap] }}>
      {children}
    </div>
  )
}
