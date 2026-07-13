import { fn } from 'storybook/test'
import { ToggleBadge } from './ToggleBadge'

const meta = {
  title: 'Atoms/ToggleBadge',
  component: ToggleBadge,
  args: {
    tone: 'success',
    label: 'Toggle payment status',
    children: 'Paid',
    onClick: fn()
  }
}

export default meta

export const Default = {}

export const Neutral = { args: { tone: 'neutral', children: 'Draft' } }
