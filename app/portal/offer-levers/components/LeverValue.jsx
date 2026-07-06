import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Paragraphs } from './Paragraphs'
import { Facets } from './Facets'

// One value of a lever (e.g. "Done for you (DFY)"): its name, any lead-in
// prose, then the five facets.
export function LeverValue({ value }) {
  return (
    <Stack gap="sm">
      <Heading level={3} gutter="none">{value.name}</Heading>
      <Paragraphs items={value.summary} />
      <Facets facets={value.facets} />
    </Stack>
  )
}
