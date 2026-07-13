import { fn } from 'storybook/test'
import { Radio } from './Radio'

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  args: { label: 'Monthly', onChange: fn() }
}

export default meta

export const Unchecked = { args: { checked: false } }

export const Checked = { args: { checked: true } }
