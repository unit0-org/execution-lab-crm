import { Icon } from './Icon'
import { paths } from './Icon.paths'
import { MonoLabel } from './MonoLabel'
import { Inline } from '../layout/Inline'
import { Stack } from '../layout/Stack'

const NAMES = Object.keys(paths)

// Split out of Icon.stories.jsx to stay inside the 30-line file limit.
const meta = {
  title: 'Atoms/Icon Gallery',
  component: Icon
}

export default meta

// Driven off Icon.paths, so the gallery can never drift from the glyph set.
export const Gallery = {
  render: () => (
    <Inline gap="md">
      {NAMES.map((name) => (
        <Stack key={name} gap="xs">
          <Icon name={name} size={24} />
          <MonoLabel size={9}>{name}</MonoLabel>
        </Stack>
      ))}
    </Inline>
  )
}
