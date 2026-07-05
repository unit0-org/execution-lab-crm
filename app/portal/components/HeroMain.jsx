import { Stack } from '@/ui/layout/Stack'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { FeatureChecks } from '@/ui/molecules/FeatureChecks'
import { RegistrationWindow } from './RegistrationWindow'
import { HERO_FEATURES, heroBlurb } from './portalCopy'

// Left side of the hero: status, the big month/year, blurb, registration
// window, highlights.
export function HeroMain({ when, action, card }) {
  return (
    <Stack gap="md">
      <StateTag state={action.state} label={action.tag} size={12} />
      <Display size="lg">{when.month}<br />{when.year}</Display>
      <Text tone="muted">{heroBlurb(when.startLabel)}</Text>
      <RegistrationWindow card={card} size={12} />
      <FeatureChecks items={HERO_FEATURES} />
    </Stack>
  )
}
