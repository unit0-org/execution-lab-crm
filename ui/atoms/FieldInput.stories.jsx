import { FieldInput } from './FieldInput'

const meta = {
  title: 'Atoms/FieldInput',
  component: FieldInput,
  args: { placeholder: 'you@company.com' },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Filled = { args: { defaultValue: 'ada@lovelace.dev' } }

export const Disabled = { args: { disabled: true } }
