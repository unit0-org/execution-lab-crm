import { space } from './tokens/space'

const GAPS = { sm: space[2], md: space[4], lg: space[6] }

export function Inline({ gap = 'md', align = 'center', justify = 'start', children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: align,
      justifyContent: justify,
      gap: GAPS[gap],
    }}>
      {children}
    </div>
  )
}
