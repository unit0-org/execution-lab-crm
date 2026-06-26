import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

export function OfferLeversHeader() {
  return (
    <Stack gap="xs">
      <MonoLabel tone="accent" caps>Offer Design</MonoLabel>
      <Display size="sm">Offer Configurator</Display>
      <Text size="sm" tone="muted">
        Describe your offer, set the structural levers, then copy a
        ready-to-run prompt that redesigns it into three variations.
      </Text>
    </Stack>
  )
}
