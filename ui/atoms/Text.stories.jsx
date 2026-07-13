import { Text } from './Text'
import { Stack } from '../layout/Stack'

const TONES = ['default', 'muted', 'danger']

const meta = {
  title: 'Atoms/Text',
  component: Text,
  args: { children: 'Ada closed the Q3 renewal.' }
}

export default meta

export const Default = {}

export const Small = { args: { size: 'sm' } }

export const Strike = { args: { strike: true } }

export const Tones = {
  render: () => (
    <Stack gap="sm">
      {TONES.map((tone) => (
        <Text key={tone} tone={tone}>{tone}</Text>
      ))}
    </Stack>
  )
}
