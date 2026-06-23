import { Stack } from '@/ui/layout/Stack'
import { GrowRow } from '@/ui/layout/GrowRow'
import { CardGrid } from '@/ui/layout/CardGrid'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { RosterCard } from './RosterCard'

const SUBNOTE = '6 seats each · register early for 20% off'

// The "more cohorts" section: a labelled header over a grid of cards.
export function CohortRoster({ cohorts }) {
  if (cohorts.length === 0) return null

  return (
    <Stack gap="md">
      <GrowRow>
        <MonoLabel caps>More cohorts</MonoLabel>
        <MonoLabel tone="subtle">{SUBNOTE}</MonoLabel>
      </GrowRow>
      <CardGrid>
        {cohorts.map((card) => <RosterCard key={card.id} card={card} />)}
      </CardGrid>
    </Stack>
  )
}
