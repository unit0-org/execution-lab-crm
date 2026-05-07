import { Section } from '@/ui/Section'
import { Heading } from '@/ui/Heading'
import { DefinitionList } from '@/ui/DefinitionList'
import { DefinitionRow } from '@/ui/DefinitionRow'

const emailLabel = (isPrimary) => isPrimary ? 'Email · primary' : 'Email'

export function ContactPanel({ emails = [], phones = [], socials = [] }) {
  return (
    <Section gutter="lg">
      <Heading level={3} gutter="sm">Contact</Heading>
      <DefinitionList>
        {emails.map((e, i) => <DefinitionRow key={`e${i}`} term={emailLabel(e.is_primary)}>{e.email}</DefinitionRow>)}
        {phones.map((p, i) => <DefinitionRow key={`p${i}`} term={p.label || 'Phone'}>{p.phone}</DefinitionRow>)}
        {socials.map((s, i) => <DefinitionRow key={`s${i}`} term={s.kind}>{s.handle}</DefinitionRow>)}
      </DefinitionList>
    </Section>
  )
}
