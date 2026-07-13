import { Card } from './Card'
import { Text } from './Text'
import { toneColor } from '../tokens/tone'
import { Inline } from '../layout/Inline'

const meta = {
  title: 'Atoms/Card',
  component: Card,
  args: { children: 'Grouped content sits on a card surface.' }
}

export default meta

export const Default = {}

export const Tones = {
  render: () => (
    <Inline gap="md" align="stretch">
      {Object.keys(toneColor).map((tone) => (
        <Card key={tone} tone={tone}>
          <Text>{tone}</Text>
        </Card>
      ))}
    </Inline>
  )
}
