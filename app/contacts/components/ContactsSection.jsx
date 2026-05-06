import { Section } from '@/ui/Section'
import { SectionHeader } from '@/ui/SectionHeader'
import { Heading } from '@/ui/Heading'
import { ContactsList } from './ContactsList'

export function ContactsSection({ contacts, accountById }) {
  return (
    <Section gutter="none">
      <SectionHeader>
        <Heading level={2} gutter="none">Contacts ({contacts.length})</Heading>
      </SectionHeader>
      <ContactsList contacts={contacts} accountById={accountById} />
    </Section>
  )
}
