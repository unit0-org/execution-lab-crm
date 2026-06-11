import { Stack } from '@/ui/layout/Stack'
import { GrowRow } from '@/ui/layout/GrowRow'
import { CardGrid } from '@/ui/layout/CardGrid'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { RosterCard } from './RosterCard'

// The "more cohorts" section: a labelled header over a grid of cards.
export function CohortRoster({ cohorts }) {
  if (cohorts.length === 0) return null

  return (
    <Stack gap="md">
      <GrowRow>
        <MonoLabel caps>More cohorts</MonoLabel>
        <MonoLabel tone="subtle">6 seats each · first 2 seats −20%</MonoLabel>
      </GrowRow>
      <CardGrid>
        {cohorts.map((card) => <RosterCard key={card.id} card={card} />)}
      </CardGrid>
    </Stack>
  )
}
