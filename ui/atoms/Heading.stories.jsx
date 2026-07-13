import { Heading } from './Heading'
import { Stack } from '../layout/Stack'

const LEVELS = [1, 2, 3]

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  args: { children: 'Pipeline overview' }
}

export default meta

export const Default = {}

export const Levels = {
  render: () => (
    <Stack>
      {LEVELS.map((level) => (
        <Heading key={level} level={level}>Level {level}</Heading>
      ))}
    </Stack>
  )
}
