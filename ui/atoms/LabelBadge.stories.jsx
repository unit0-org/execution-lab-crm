import { LabelBadge } from './LabelBadge'
import { LABEL_COLOR_KEYS } from '../tokens/labelColors'
import { Inline } from '../layout/Inline'

const meta = {
  title: 'Atoms/LabelBadge',
  component: LabelBadge,
  args: { name: 'VIP', color: 'blue' }
}

export default meta

export const Default = {}

// Unknown colors fall back to blue.
export const UnknownColor = { args: { color: 'chartreuse' } }

export const Palette = {
  render: () => (
    <Inline>
      {LABEL_COLOR_KEYS.map((key) => (
        <LabelBadge key={key} name={key} color={key} />
      ))}
    </Inline>
  )
}
