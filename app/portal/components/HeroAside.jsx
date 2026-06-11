import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { CohortCta } from './CohortCta'
import { SaveLine } from './SaveLine'
import { heroAsideView } from './heroAsideView'

// Right side of the hero: price, scarcity, and the primary CTA.
export function HeroAside({ action, card }) {
  const v = heroAsideView(card, action)

  return (
    <>
      <Stack gap="sm">
        <MonoLabel caps size={10}>{v.kicker}</MonoLabel>
        <PriceTag price={v.price} regular={v.regular} size={46} />
        <SaveLine pricing={card.pricing} />
      </Stack>
      <Stack gap="sm">
        <MonoLabel tone={v.tone} size={12} caps>{v.spots}</MonoLabel>
        <CohortCta action={action} block size="lg" />
        <MonoLabel tone="subtle" size={10} align="center">{v.note}</MonoLabel>
      </Stack>
    </>
  )
}
