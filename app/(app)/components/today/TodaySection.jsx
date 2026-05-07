import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { EmptyState } from '@/ui/EmptyState'
import { Stack } from '@/ui/Stack'

export function TodaySection({ title, count, empty, children }) {
  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">{title} ({count})</Heading>
      {count === 0 && <EmptyState>{empty}</EmptyState>}
      <Stack gap="sm">{children}</Stack>
    </Section>
  )
}
