import { fontWeight } from '../tokens/typography'
import { space } from '../tokens/space'
import { tones } from './Button.tones'
import { sizes } from './Button.sizes'

const ease = 'var(--motion-quick) var(--motion-ease)'
const transition = `background ${ease}, border-color ${ease}, `
  + `color ${ease}, transform ${ease}, filter ${ease}`

const base = {
  cursor: 'pointer', font: 'inherit', fontWeight: fontWeight.bold,
  textTransform: 'uppercase', letterSpacing: '0.08em', alignSelf: 'flex-start',
  textAlign: 'center', textDecoration: 'none', display: 'inline-block',
  transition
}

const full = (block) => (block ? { width: '100%' } : null)

// Icon-only: a compact square that centres the glyph, in place of the text
// button's wide padding and baseline-aligned content.
const iconPad = { sm: space[2], md: space[2], lg: space[3] }
const iconOnly = (size = 'md') => ({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  lineHeight: 0, padding: iconPad[size]
})

export const buttonStyle = (
  { tone = 'default', size = 'md', block, icon } = {}
) => ({
  ...base, ...tones[tone], ...sizes[size], ...full(block),
  ...(icon ? iconOnly(size) : null)
})
