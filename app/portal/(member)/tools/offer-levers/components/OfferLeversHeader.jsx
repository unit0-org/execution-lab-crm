import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

export function OfferLeversHeader({ name }) {
  return (
    <Stack gap="xs">
      <Link href={portalRoutePath('/tools/offer-levers')}>← All offers</Link>
      <MonoLabel tone="accent" caps>Offer Design</MonoLabel>
      <Display size="sm">{name}</Display>
      <Text size="sm" tone="muted">
        Describe your offer, set the structural levers, then copy a
        ready-to-run prompt that redesigns it into three variations.
      </Text>
    </Stack>
  )
}
