import { Button } from './Button'
import { tones } from './Button.tones'
import { Inline } from '../layout/Inline'
import { Icon } from './Icon'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: { children: 'Save changes' }
}

export default meta

export const Default = {}

export const Primary = { args: { tone: 'primary' } }

export const Loading = { args: { tone: 'primary', loading: true } }

export const Disabled = { args: { tone: 'primary', disabled: true } }

export const IconOnly = {
  render: () => (
    <Inline>
      <Button tone="primary" size="sm" icon aria-label="Send">
        <Icon name="arrowUp" size={16} />
      </Button>
    </Inline>
  )
}

export const Tones = {
  render: () => (
    <Inline>
      {Object.keys(tones).map((tone) => (
        <Button key={tone} tone={tone}>{tone}</Button>
      ))}
    </Inline>
  )
}
