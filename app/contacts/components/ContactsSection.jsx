import { Section } from '@/ui/Section'
import { SectionHeader } from '@/ui/SectionHeader'
import { Heading } from '@/ui/Heading'
import { BulkActionBar } from './BulkActionBar'
import { ContactsList } from './ContactsList'

export function ContactsSection({ contacts, accountById, allLabels, contactTagMap, onMutate, selection }) {
  return (
    <Section gutter="none">
      <SectionHeader>
        <Heading level={2} gutter="none">Contacts ({contacts.length})</Heading>
      </SectionHeader>
      <BulkActionBar selection={selection} labels={allLabels} onApplied={onMutate} />
      <ContactsList contacts={contacts} accountById={accountById} allLabels={allLabels}
        contactTagMap={contactTagMap} onMutate={onMutate} selection={selection} />
    </Section>
  )
}
