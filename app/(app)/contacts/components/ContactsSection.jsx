import { Section } from '@/ui/Section'
import { SectionHeader } from '@/ui/SectionHeader'
import { Heading } from '@/ui/Heading'
import { BulkActionBar } from './BulkActionBar'
import { ContactsList } from './ContactsList'

export function ContactsSection(props) {
  return (
    <Section gutter="none">
      <SectionHeader>
        <Heading level={2} gutter="none">Contacts ({props.contacts.length})</Heading>
      </SectionHeader>
      <BulkActionBar selection={props.selection} labels={props.allLabels} onApplied={props.onMutate} />
      <ContactsList {...props} />
    </Section>
  )
}
