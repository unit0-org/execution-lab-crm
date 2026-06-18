import { Stack } from '@/ui/layout/Stack'
import { CohortCta } from './CohortCta'
import { CohortScarcity } from './CohortScarcity'
import { HeroPrice } from './HeroPrice'
import { HeroNote } from './HeroNote'
import { heroAsideView } from './heroAsideView'

// Right side of the hero: price (hidden when sold out), scarcity, CTA, and
// fine print — the CTA and note both drop out once the cohort is sold out.
export function HeroAside({ action, card }) {
  const v = heroAsideView(card, action)

  return (
    <>
      <HeroPrice view={v} pricing={card.pricing} />
      <Stack gap="sm">
        <CohortScarcity card={card} tone={v.tone} />
        <CohortCta action={action} block size="lg" />
        <HeroNote note={v.note} />
      </Stack>
    </>
  )
}
