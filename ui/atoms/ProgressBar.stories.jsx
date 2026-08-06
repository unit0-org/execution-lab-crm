import { ProgressBar } from './ProgressBar'

const meta = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'padded' }
}

export default meta

// Indeterminate: the fill sweeps across the track.
export const Default = {}

// Determinate: filled to how much of the batch is done (4 of 8 invoices).
export const Counted = { args: { value: 4, total: 8 } }

// The empty track a dialog shows before the work starts, so nothing moves
// when it does.
export const Empty = { args: { value: 0, total: 8 } }
