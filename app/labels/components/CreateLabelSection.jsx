import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { CreateLabelForm } from './CreateLabelForm'

export function CreateLabelSection() {
  return (
    <Section gutter="none">
      <Heading level={2} gutter="md">New label</Heading>
      <CreateLabelForm />
    </Section>
  )
}
