import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Paragraphs } from './Paragraphs'

// A titled block of prose: a heading over its paragraphs. Used for the
// intro sections and each lever's synthesis notes (`level` sets the depth).
export function Section({ heading, body, level = 2 }) {
  return (
    <Stack gap="sm">
      <Heading level={level} gutter="none">{heading}</Heading>
      <Paragraphs items={body} />
    </Stack>
  )
}
