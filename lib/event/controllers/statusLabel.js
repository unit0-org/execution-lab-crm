import { STATUS_STATES } from './statusStates'

// The current participation state, from whichever timestamp is set.
export function toStatusLabel(participant) {
  const match = STATUS_STATES.find(([field]) => participant[field])

  return match ? match[1] : 'Participant'
}
