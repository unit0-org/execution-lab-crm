import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { DefinitionList } from '@/ui/DefinitionList'
import { AboutRow } from './AboutRow'

export function AboutPanel({ person }) {
  return (
    <Section gutter="lg">
      <Heading level={3} gutter="sm">About</Heading>
      <DefinitionList>
        <AboutRow term="Met"     value={person.met} />
        <AboutRow term="City"    value={person.city} />
        <AboutRow term="Goals"   value={person.goals} />
        <AboutRow term="You owe" value={person.i_owe} />
      </DefinitionList>
    </Section>
  )
}
