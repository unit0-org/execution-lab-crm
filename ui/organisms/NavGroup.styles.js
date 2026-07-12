import { space } from '../tokens/space'

export const navGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1]
}

export const navGroupHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: space[3],
  padding: `${space[2]} ${space[3]}`,
  background: 'none',
  border: 'none',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
}

export const chevronStyle = {
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 150ms ease'
}
