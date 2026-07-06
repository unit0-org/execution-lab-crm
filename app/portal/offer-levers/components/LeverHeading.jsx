import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'

// A lever's title block: numbered kicker, name, and the one question it
// answers.
export function LeverHeading({ num, name, question }) {
  return (
    <Stack gap="xs">
      <MonoLabel tone="accent" caps>{`Lever ${num}`}</MonoLabel>
      <Heading level={2} gutter="none">{name}</Heading>
      <Text tone="muted" gutter="none">{question}</Text>
    </Stack>
  )
}
