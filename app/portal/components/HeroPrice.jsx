import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { SaveLine } from './SaveLine'

// The hero price block: kicker, price, and any savings line. Hidden whole
// when the cohort is sold out (view.price is null).
export function HeroPrice({ view, pricing }) {
  if (!view.price) return null

  return (
    <Stack gap="sm">
      <MonoLabel caps size={10}>{view.kicker}</MonoLabel>
      <PriceTag price={view.price} regular={view.regular} size={46} />
      <SaveLine pricing={pricing} />
    </Stack>
  )
}
