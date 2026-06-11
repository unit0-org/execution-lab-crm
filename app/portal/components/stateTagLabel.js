import { STATE_META } from './cohortStateMeta'

const WAVE = 'Your wave is live'

// The status tag copy for a register/portal state (incl. the wave claim).
export function stateTagLabel(state) {
  if (state === 'wave') return WAVE

  return STATE_META[state]?.tag || ''
}
