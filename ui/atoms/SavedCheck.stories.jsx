import { SavedCheck } from './SavedCheck'

const meta = {
  title: 'Atoms/SavedCheck',
  component: SavedCheck,
  args: { show: true }
}

export default meta

export const Shown = {}

// Keeps its space when hidden, so nothing shifts as it fades.
export const Hidden = { args: { show: false } }
