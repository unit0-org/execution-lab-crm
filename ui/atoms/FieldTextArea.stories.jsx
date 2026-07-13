import { FieldTextArea } from './FieldTextArea'

const meta = {
  title: 'Atoms/FieldTextArea',
  component: FieldTextArea,
  args: { placeholder: 'Tell us about your goals' },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Tall = { args: { rows: 8 } }
