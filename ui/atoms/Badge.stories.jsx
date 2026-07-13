import { Badge } from './Badge'
import { Inline } from '../layout/Inline'

const TONES = ['accent', 'success', 'error', 'neutral']

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  args: { children: 'Active' }
}

export default meta

export const Default = {}

export const Tones = {
  render: () => (
    <Inline>
      {TONES.map((tone) => (
        <Badge key={tone} tone={tone}>{tone}</Badge>
      ))}
    </Inline>
  )
}
