import { fn } from 'storybook/test'
import { EditableText } from './EditableText'

const meta = {
  title: 'Atoms/EditableText',
  component: EditableText,
  args: { value: 'ada@lovelace.dev', onClick: fn() },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Empty = { args: { value: '—' } }
