import { fn } from 'storybook/test'
import { TextField } from './TextField'
import { IconButton } from './IconButton'
import { Icon } from './Icon'

const clear = (
  <IconButton label="Clear" onClick={fn()}>
    <Icon name="close" size={14} />
  </IconButton>
)

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  args: { label: 'Email', placeholder: 'you@company.com' },
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Required = { args: { required: true } }

export const WithTrailing = { args: { trailing: clear } }

export const Saved = {
  args: { defaultValue: 'ada@lovelace.dev', saved: true }
}
