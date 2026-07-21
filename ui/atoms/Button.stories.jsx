import { Button } from './Button'
import { tones } from './Button.tones'
import { Inline } from '../layout/Inline'

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

export const Tones = {
  render: () => (
    <Inline>
      {Object.keys(tones).map((tone) => (
        <Button key={tone} tone={tone}>{tone}</Button>
      ))}
    </Inline>
  )
}
