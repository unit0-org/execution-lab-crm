import { statusColors } from './statusColors'

const v = (n) => `var(--color-${n})`

const bg = {
  canvas: v('bg-canvas'), surface: v('bg-surface'),
  subtle: v('bg-subtle'), sunken: v('bg-sunken'), code: v('bg-code'),
}

const text = {
  primary: v('text-primary'), secondary: v('text-secondary'),
  muted: v('text-muted'), subtle: v('text-subtle'),
}

const accent = {
  solid: v('accent'), solidHover: v('accent-hover'),
  text: v('accent-text'), soft: v('accent-soft'),
  tint: v('accent-tint'), deep: v('accent-deep'),
}

const border = {
  default: v('border-default'), soft: v('border-soft'),
  strong: v('border-strong'),
}

const warmth = { warm: v('warm'), cool: v('cool'), cold: v('cold') }

export const color = { bg, text, border, accent, warmth, status: statusColors }
