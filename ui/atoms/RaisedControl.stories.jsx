import { fn } from 'storybook/test'
import { RaisedControl } from './RaisedControl'
import { LinkCard } from './LinkCard'
import { IconButton } from './IconButton'
import { Icon } from './Icon'
import { Text } from './Text'

// Lifts a control above a LinkCard's stretched-link overlay so it keeps
// receiving clicks.
const meta = {
  title: 'Atoms/RaisedControl',
  component: RaisedControl
}

export default meta

export const Default = {
  render: () => (
    <LinkCard href="#" label="Open record">
      <Text>The trash button stays clickable.</Text>
      <RaisedControl>
        <IconButton label="Delete" tone="danger" onClick={fn()}>
          <Icon name="trash" />
        </IconButton>
      </RaisedControl>
    </LinkCard>
  )
}
