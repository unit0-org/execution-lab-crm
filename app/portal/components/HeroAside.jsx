import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { CohortCta } from './CohortCta'
import { CohortScarcity } from './CohortScarcity'
import { HeroPrice } from './HeroPrice'
import { heroAsideView } from './heroAsideView'

// Right side of the hero: price (hidden when sold out), scarcity, and CTA.
export function HeroAside({ action, card }) {
  const v = heroAsideView(card, action)

  return (
    <>
      <HeroPrice view={v} pricing={card.pricing} />
      <Stack gap="sm">
        <CohortScarcity card={card} tone={v.tone} />
        <CohortCta action={action} block size="lg" />
        <MonoLabel tone="subtle" size={10} align="center">{v.note}</MonoLabel>
      </Stack>
    </>
  )
}
