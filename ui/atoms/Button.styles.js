import { fontWeight } from '../tokens/typography'
import { quickTransition } from '../tokens/motion'
import { tones } from './Button.tones'
import { sizes } from './Button.sizes'
import { iconOnly } from './Button.icon'
import { joined } from './Button.joins'

const transition = quickTransition(
  'background', 'border-color', 'color', 'transform', 'filter')

const base = {
  cursor: 'pointer', font: 'inherit', fontWeight: fontWeight.bold,
  textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start',
  textAlign: 'center', textDecoration: 'none', display: 'inline-block',
  transition
}

const full = (block) => (block ? { width: '100%' } : null)

export const buttonStyle = (
  { tone = 'default', size = 'md', block, icon, join } = {}
) => ({
  ...base, ...tones[tone], ...sizes[size], ...full(block),
  ...iconOnly(icon, size, join), ...joined(join)
})
