export const motion = {
  quick: 'var(--motion-quick)',
  soft:  'var(--motion-soft)',
  ease:  'var(--motion-ease)',
}

export const transition = (props = 'all', speed = 'quick') =>
  `${props} ${motion[speed]} ${motion.ease}`
