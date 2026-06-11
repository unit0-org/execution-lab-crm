import { Stack } from '@/ui/layout/Stack'
import { StateTag } from '@/ui/molecules/StateTag'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'
import { stateTagLabel } from './stateTagLabel'

const BLURB = 'A few questions about you and your business — about 5 '
  + 'minutes. Then you’ll continue to secure payment to lock your seat.'

// Register screen title block: status, "Register.", and a short blurb.
export function RegisterHeader({ state }) {
  return (
    <Stack gap="sm">
      <StateTag state={state} label={stateTagLabel(state)} size={12} />
      <Display size="md">Register.</Display>
      <Text tone="muted">{BLURB}</Text>
    </Stack>
  )
}
