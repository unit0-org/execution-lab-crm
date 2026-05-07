import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { TypesList } from './TypesList'

export function AllTypesSection({ types }) {
  return (
    <Section gutter="none">
      <Heading level={2} gutter="md">All types ({types.length})</Heading>
      <TypesList types={types} />
    </Section>
  )
}
