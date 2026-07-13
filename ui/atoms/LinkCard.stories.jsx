import { fn } from 'storybook/test'
import { LinkCard } from './LinkCard'
import { RaisedControl } from './RaisedControl'
import { IconButton } from './IconButton'
import { Icon } from './Icon'
import { Heading } from './Heading'
import { Text } from './Text'

const meta = {
  title: 'Atoms/LinkCard',
  component: LinkCard,
  args: { href: '#', label: 'Open Ada Lovelace' }
}

export default meta

export const Default = {
  render: (args) => (
    <LinkCard {...args}>
      <Heading level={2} gutter="sm">Ada Lovelace</Heading>
      <Text tone="muted">The surface links; the button still clicks.</Text>
      <RaisedControl>
        <IconButton label="Delete" tone="danger" onClick={fn()}>
          <Icon name="trash" />
        </IconButton>
      </RaisedControl>
    </LinkCard>
  )
}
