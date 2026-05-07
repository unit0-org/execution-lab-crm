import { Inline } from '@/ui/Inline'
import { headerStyle } from './PersonHeader.styles'
import { PersonName } from './PersonName'
import { WarmthDots } from './WarmthDots'
import { PersonChips } from './PersonChips'

export function PersonHeader({ person, types, labels }) {
  return (
    <header style={headerStyle}>
      <Inline gap="lg" justify="space-between">
        <PersonName name={person.display_name} role={person.role} org={person.orgs} />
        <WarmthDots value={person.warmth} />
      </Inline>
      <PersonChips types={types} labels={labels} />
    </header>
  )
}
