import { Pending } from './Pending'

// Centers a spinner over the label while keeping the label's footprint,
// so a button keeps its size between idle and pending (no CLS).
const meta = {
  title: 'Atoms/Pending',
  component: Pending,
  args: { children: 'Saving changes' }
}

export default meta

export const Default = {}
