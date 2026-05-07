import { space } from './tokens/space'
import { radius } from './tokens/radius'
import { fontSize, fontWeight } from './tokens/typography'

const tones = {
  default: { background: 'var(--color-bg-subtle)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-soft)' },
  accent:  { background: 'var(--color-accent-tint)', color: 'var(--color-accent-deep)', border: '1px solid var(--color-accent-soft)' },
}

export const chipStyle = (_color, tone = 'default') => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: space[1],
  padding: `2px ${space[2]}`,
  borderRadius: radius.pill,
  fontSize: '11.5px',
  fontWeight: fontWeight.regular,
  whiteSpace: 'nowrap',
  ...tones[tone],
})
