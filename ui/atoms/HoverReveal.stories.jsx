import { fn } from 'storybook/test'
import { HoverReveal } from './HoverReveal'
import { Card } from './Card'
import { IconButton } from './IconButton'
import { Icon } from './Icon'
import { Text } from './Text'

// Reveals its actions only while the [data-hover-host] Card is hovered.
const meta = {
  title: 'Atoms/HoverReveal',
  component: HoverReveal
}

export default meta

export const Default = {
  render: () => (
    <Card hoverHost>
      <Text>Hover the card to reveal the action.</Text>
      <HoverReveal>
        <IconButton label="Delete" tone="danger" onClick={fn()}>
          <Icon name="trash" />
        </IconButton>
      </HoverReveal>
    </Card>
  )
}
