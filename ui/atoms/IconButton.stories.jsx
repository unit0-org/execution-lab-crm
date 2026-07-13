import { fn } from 'storybook/test'
import { IconButton } from './IconButton'
import { Icon } from './Icon'

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: { label: 'Add', onClick: fn() }
}

export default meta

export const Default = {
  render: (args) => <IconButton {...args}><Icon name="plus" /></IconButton>
}
