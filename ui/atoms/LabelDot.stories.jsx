import { LabelDot } from './LabelDot'
import { LABEL_COLOR_KEYS } from '../tokens/labelColors'
import { Inline } from '../layout/Inline'

const meta = {
  title: 'Atoms/LabelDot',
  component: LabelDot,
  args: { color: 'blue' }
}

export default meta

export const Default = {}

export const Large = { args: { size: 16 } }

export const Palette = {
  render: () => (
    <Inline>
      {LABEL_COLOR_KEYS.map((key) => (
        <LabelDot key={key} color={key} size={12} />
      ))}
    </Inline>
  )
}
