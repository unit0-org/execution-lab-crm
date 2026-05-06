// Color tokens — values resolve from CSS variables in app/globals.css.
import { statusColors } from './statusColors'

export const color = {
  bg: {
    canvas:  'var(--color-bg-canvas)',
    surface: 'var(--color-bg-surface)',
    subtle:  'var(--color-bg-subtle)',
    code:    'var(--color-bg-code)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted:     'var(--color-text-muted)',
  },
  border: {
    default: 'var(--color-border-default)',
    strong:  'var(--color-border-strong)',
  },
  accent: {
    solid:      'var(--color-accent)',
    solidHover: 'var(--color-accent-hover)',
    text:       'var(--color-accent-text)',
  },
  status: statusColors,
}
