import { fn } from 'storybook/test'
import { TextButton } from './TextButton'

// Looks like inline body text — for tiny in-flow actions.
const meta = {
  title: 'Atoms/TextButton',
  component: TextButton,
  args: { children: 'sign out', type: 'button', onClick: fn() }
}

export default meta

export const Default = {}
