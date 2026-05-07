import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { CreateForm } from './CreateForm'

export function CreateSection() {
  return (
    <Section gutter="none">
      <Heading level={2} gutter="md">New type</Heading>
      <CreateForm />
    </Section>
  )
}
