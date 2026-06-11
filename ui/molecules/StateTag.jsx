import { GlowDot } from '@/ui/atoms/GlowDot'
import { stateTagStyle, stateDotColor, stateHasDot } from './StateTag.styles'

// The dot only shows for live states; a named component keeps the
// conditional out of the JSX.
function StateDot({ state }) {
  if (!stateHasDot(state)) return null

  return <GlowDot color={stateDotColor(state)} />
}

// Mono uppercase status label, neon-colored by cohort state.
export function StateTag({ state, label, size = 11 }) {
  return (
    <span style={stateTagStyle(state, size)}>
      <StateDot state={state} />
      {label}
    </span>
  )
}
