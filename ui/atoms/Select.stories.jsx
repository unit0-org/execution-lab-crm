import { Select } from './Select'

const OPTIONS = ['Lead', 'Customer', 'Churned']

const OBJECT_OPTIONS = [
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' }
]

const meta = {
  title: 'Atoms/Select',
  component: Select,
  args: { label: 'Status', options: OPTIONS },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Required = { args: { required: true } }

// Options accept bare strings or { value, label } objects.
export const ObjectOptions = { args: { options: OBJECT_OPTIONS } }

export const Disabled = { args: { disabled: true } }
