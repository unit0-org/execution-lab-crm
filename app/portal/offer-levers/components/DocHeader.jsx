import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { LEAD } from '../lead'

// The public guide's hero: kicker, title, and a one-paragraph lead.
export function DocHeader() {
  return (
    <Stack gap="sm">
      <MonoLabel tone="accent" caps>Offer Design Framework</MonoLabel>
      <Display size="lg">Offer levers</Display>
      <Text tone="muted">{LEAD}</Text>
    </Stack>
  )
}
