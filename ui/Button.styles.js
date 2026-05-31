import { fontWeight } from './tokens/typography'
import { tones } from './Button.tones'
import { sizes } from './Button.sizes'

const ease = 'var(--motion-quick) var(--motion-ease)'
const transition = `background ${ease}, border-color ${ease}, color ${ease}`

const base = {
  cursor: 'pointer', font: 'inherit', fontWeight: fontWeight.medium,
  textDecoration: 'none', display: 'inline-block', transition,
}

const full = (block) => (block ? { width: '100%' } : null)

export const buttonStyle = ({ tone = 'default', size = 'md', block } = {}) => ({
  ...base, ...tones[tone], ...sizes[size], ...full(block),
})
