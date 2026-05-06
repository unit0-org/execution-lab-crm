import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { LabelsList } from './LabelsList'

export function AllLabelsSection({ labels }) {
  return (
    <Section gutter="none">
      <Heading level={2} gutter="md">All labels ({labels.length})</Heading>
      <LabelsList labels={labels} />
    </Section>
  )
}
