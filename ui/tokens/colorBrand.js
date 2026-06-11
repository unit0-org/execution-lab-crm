const v = (n) => `var(--color-${n})`

const glow = {
  blue: 'var(--glow-blue)', mint: 'var(--glow-mint)',
  wave: 'var(--glow-wave)', cyan: 'var(--glow-cyan)'
}

const soft = {
  cool: v('cool-soft'), cold: v('cold-soft'), wave: v('wave-soft')
}

const tint = { cool: v('cool-tint'), wave: v('wave-tint') }

const gradient = {
  brand: 'var(--gradient-brand)', brandX: 'var(--gradient-brand-x)'
}

// Neon glows, low-alpha accents, gradients, and on-brand button text —
// portal/design-system extras to the core color tokens.
export const brand = {
  glow, soft, tint, gradient, onBrand: v('on-brand'), required: v('required')
}
