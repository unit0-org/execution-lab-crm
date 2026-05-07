import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { EmptyState } from '@/ui/EmptyState'
import { TimelineRow } from './TimelineRow'

export function Timeline({ entries }) {
  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">Timeline</Heading>
      {entries.length === 0 && <EmptyState>Nothing here yet. Activity will appear as it syncs.</EmptyState>}
      {entries.map((e) => <TimelineRow key={e.id} entry={e} />)}
    </Section>
  )
}
