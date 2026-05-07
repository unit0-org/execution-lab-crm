import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { FollowUpRow } from './FollowUpRow'

export function Group({ title, flags }) {
  if (!flags.length) return null

  return (
    <Section gutter="lg">
      <Heading level={2} gutter="md">{title} ({flags.length})</Heading>
      {flags.map((f) => <FollowUpRow key={f.id} flag={f} />)}
    </Section>
  )
}
