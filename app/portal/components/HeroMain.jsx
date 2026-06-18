import { Stack } from '@/ui/layout/Stack'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { FeatureChecks } from '@/ui/molecules/FeatureChecks'
import { HERO_FEATURES, heroBlurb } from './portalCopy'

// Left side of the hero: status, the big month/year, blurb, highlights.
export function HeroMain({ when, action }) {
  return (
    <Stack gap="md">
      <StateTag state={action.state} label={action.tag} size={12} />
      <Display size="lg">{when.month}<br />{when.year}</Display>
      <Text tone="muted">{heroBlurb(when.startLabel)}</Text>
      <FeatureChecks items={HERO_FEATURES} />
    </Stack>
  )
}
