import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { EmptyState } from '@/ui/EmptyState'
import { TimelineRow } from './TimelineRow'
import { LinkMeetingForm } from './LinkMeetingForm'

export function Timeline({ contactId, entries, linkable }) {
  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">Timeline</Heading>
      {entries.length === 0 && <EmptyState>Nothing here yet. Link a past meeting below, or wait for sync.</EmptyState>}
      {entries.map((e) => <TimelineRow key={e.id} entry={e} />)}
      <LinkMeetingForm contactId={contactId} meetings={linkable} />
    </Section>
  )
}
