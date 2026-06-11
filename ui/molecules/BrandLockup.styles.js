import { color } from '../tokens/color'
import { font, fontWeight } from '../tokens/typography'

export const lockupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  textDecoration: 'none'
}

export const colStyle = { display: 'block' }

export const logoStyle = { display: 'block', borderRadius: '7px' }

export const titleStyle = {
  display: 'block',
  fontFamily: font.sans,
  fontWeight: fontWeight.black,
  fontSize: '17px',
  letterSpacing: '0.01em',
  color: color.text.primary,
  textTransform: 'uppercase',
  lineHeight: 1.05
}
