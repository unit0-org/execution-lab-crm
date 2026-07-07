import { Inline } from '@/ui/layout/Inline'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'

// A lever's title block: numbered kicker + control type, its name, and the
// one question it answers.
export function LeverHeading({ num, name, question, control }) {
  return (
    <Stack gap="xs">
      <Inline gap="sm">
        <MonoLabel tone="accent" caps>{`Lever ${num}`}</MonoLabel>
        <MonoLabel tone="muted" caps>{control}</MonoLabel>
      </Inline>
      <Heading level={2} gutter="none">{name}</Heading>
      <Text tone="muted" gutter="none">{question}</Text>
    </Stack>
  )
}
