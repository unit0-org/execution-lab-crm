import { MonoLabel } from './MonoLabel'
import { Inline } from '../layout/Inline'

const TONES = [
  'muted', 'subtle', 'primary', 'accent',
  'cool', 'cold', 'wave', 'danger'
]

const meta = {
  title: 'Atoms/MonoLabel',
  component: MonoLabel,
  args: { children: 'CONTACT ID' }
}

export default meta

export const Default = {}

export const Caps = { args: { caps: true, children: 'kicker' } }

export const Tones = {
  render: () => (
    <Inline>
      {TONES.map((tone) => (
        <MonoLabel key={tone} tone={tone} caps>{tone}</MonoLabel>
      ))}
    </Inline>
  )
}
