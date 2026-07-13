import { TextArea } from './TextArea'

const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
  args: { label: 'Notes', placeholder: 'What did you discuss?' },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Tall = { args: { rows: 8 } }

export const Filled = {
  args: { defaultValue: 'Follow up after the pilot.' }
}
