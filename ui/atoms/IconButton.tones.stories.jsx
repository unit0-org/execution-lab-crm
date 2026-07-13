import { fn } from 'storybook/test'
import { IconButton } from './IconButton'
import { Icon } from './Icon'
import { Inline } from '../layout/Inline'

const TONES = ['default', 'primary', 'danger']
const click = fn()

// Split out of IconButton.stories.jsx to stay inside the 30-line limit.
const meta = {
  title: 'Atoms/IconButton Tones',
  component: IconButton
}

export default meta

export const Tones = {
  render: () => (
    <Inline>
      {TONES.map((tone) => (
        <IconButton key={tone} tone={tone} label={tone} onClick={click}>
          <Icon name="pencil" />
        </IconButton>
      ))}
    </Inline>
  )
}
