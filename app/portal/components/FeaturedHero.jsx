import { HeroPanel } from '@/ui/organisms/HeroPanel'
import { HeroMain } from './HeroMain'
import { HeroAside } from './HeroAside'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'
import { cohortState } from './cohortState'

// The featured (soonest open) cohort, rendered as the landing hero.
export function FeaturedHero({ card }) {
  const when = cohortMonthYear(card.start_date)
  const action = cohortState(card)

  return (
    <HeroPanel tone="launch"
      main={<HeroMain when={when} action={action} card={card} />}
      aside={<HeroAside action={action} card={card} />} />
  )
}
