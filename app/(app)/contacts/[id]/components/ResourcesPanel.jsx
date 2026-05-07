import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { EmptyState } from '@/ui/EmptyState'
import { ResourceRow } from './ResourceRow'
import { AddResourceForm } from './AddResourceForm'

export function ResourcesPanel({ contactId, resources }) {
  return (
    <Section gutter="lg">
      <Heading level={3} gutter="sm">Linked resources</Heading>
      {resources.length === 0 && <EmptyState>No resources linked yet.</EmptyState>}
      {resources.map((r) => <ResourceRow key={r.id} contactId={contactId} resource={r} />)}
      <AddResourceForm contactId={contactId} />
    </Section>
  )
}
