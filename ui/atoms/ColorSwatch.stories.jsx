import { fn } from 'storybook/test'
import { ColorSwatch } from './ColorSwatch'
import { LABEL_COLOR_KEYS } from '../tokens/labelColors'
import { Inline } from '../layout/Inline'

const pick = fn()

const meta = {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  args: { color: 'blue', onPick: pick }
}

export default meta

export const Default = {}

export const Active = { args: { active: true } }

export const Palette = {
  render: () => (
    <Inline>
      {LABEL_COLOR_KEYS.map((key) => (
        <ColorSwatch key={key} color={key} onPick={pick} />
      ))}
    </Inline>
  )
}
