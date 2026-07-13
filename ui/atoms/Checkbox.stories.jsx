import { fn } from 'storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: { label: 'Include in leads', onChange: fn() }
}

export default meta

export const Unchecked = { args: { checked: false } }

export const Checked = { args: { checked: true } }

export const Indeterminate = {
  args: { checked: false, indeterminate: true }
}
