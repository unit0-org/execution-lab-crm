import { AccentPanel } from '@/ui/organisms/AccentPanel'
import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { StatTile } from '@/ui/molecules/StatTile'
import { confirmationView } from './confirmationView'

// The celebratory confirmation card: status, greeting, and key facts.
export function CongratsCard({ name, email, start }) {
  const v = confirmationView(name, email, start)

  return (
    <AccentPanel tone="mint">
      <Stack gap="md">
        <StateTag state="confirmed" label="Seat confirmed" size={12} />
        <Display size="xl">{v.title}</Display>
        <Text tone="muted">{v.blurb}</Text>
        <Columns>
          <StatTile value={v.kickoff} label="Kickoff" tone="cool" />
          <StatTile value="8 weeks" label="Program length" tone="cool" />
          <StatTile value="6 people" label="Your cohort" tone="cool" />
        </Columns>
      </Stack>
    </AccentPanel>
  )
}
