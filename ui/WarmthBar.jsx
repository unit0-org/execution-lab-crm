const TICKS = [1, 2, 3, 4, 5]

const wrap = { display: 'inline-flex', alignItems: 'center', gap: '3px' }

const tickStyle = (on) => ({
  width: 3, height: 10, borderRadius: 1,
  background: on ? 'var(--color-accent)' : 'var(--color-border-default)',
  transition: 'background var(--motion-soft) var(--motion-ease)',
})

export function WarmthBar({ value = 0 }) {
  return (
    <span style={wrap} aria-label={`Warmth ${value} of 5`}>
      {TICKS.map((n) => <span key={n} style={tickStyle(value >= n)} />)}
    </span>
  )
}
