import { SyncBadge } from './SyncBadge'

const meta = {
  title: 'Atoms/SyncBadge',
  component: SyncBadge
}

export default meta

// Without an href it is a plain chip.
export const Chip = {}

export const Linked = {
  args: { href: 'https://contacts.google.com' }
}
