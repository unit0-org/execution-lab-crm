import { Stack } from '@/ui/layout/Stack'
import { CohortCta } from './CohortCta'
import { CohortScarcity } from './CohortScarcity'
import { HeroPrice } from './HeroPrice'
import { HeroNote } from './HeroNote'
import { HeroAsideSoldOut } from './HeroAsideSoldOut'
import { heroAsideView } from './heroAsideView'

// Right side of the hero: price (hidden when sold out), scarcity, CTA, and
// fine print. Once the cohort is sold out it all drops out, replaced by one
// large, centered "Sold out".
export function HeroAside({ action, card }) {
  const v = heroAsideView(card, action)

  if (action.state === 'full') return <HeroAsideSoldOut />

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
