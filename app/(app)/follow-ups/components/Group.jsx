import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { Stack } from '@/ui/Stack'
import { FollowUpRow } from './FollowUpRow'

export function Group({ title, flags }) {
  if (!flags.length) return null

  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">{title} ({flags.length})</Heading>
      <Stack gap="sm">{flags.map((f) => <FollowUpRow key={f.id} flag={f} />)}</Stack>
    </Section>
  )
}
