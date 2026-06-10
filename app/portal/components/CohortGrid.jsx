import { Text } from '@/ui/atoms/Text'
import { CardGrid } from '@/ui/layout/CardGrid'
import { CohortCard } from './CohortCard'

// Responsive grid of open-cohort cards (empty-state when none open).
export function CohortGrid({ cohorts }) {
  if (cohorts.length === 0) {
    return <Text tone="muted">No cohorts open right now.</Text>
  }

  return (
    <CardGrid>
      {cohorts.map((cohort) => (
        <CohortCard key={cohort.id} cohort={cohort} />
      ))}
    </CardGrid>
  )
}
