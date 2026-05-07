import { Section } from '@/ui/Section'
import { Stack } from '@/ui/Stack'
import { Inline } from '@/ui/Inline'
import { Divider } from '@/ui/Divider'
import { PersonName } from './PersonName'
import { WarmthDots } from './WarmthDots'
import { PersonChips } from './PersonChips'

export function PersonHeader({ person, types, labels }) {
  return (
    <Section gutter="md">
      <Stack gap="sm">
        <Inline gap="lg" justify="space-between">
          <PersonName name={person.display_name} role={person.role} org={person.orgs} />
          <WarmthDots value={person.warmth} />
        </Inline>
        <PersonChips types={types} labels={labels} />
      </Stack>
      <Divider gutter={6} />
    </Section>
  )
}
