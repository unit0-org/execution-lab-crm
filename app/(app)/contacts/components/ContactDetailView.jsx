'use client'

import { useContact } from '../hooks/useContact'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { contactLabel } from '@/lib/contact/controllers/contactLabel'
import { ContactDetail } from './ContactDetail'
import { NotFound } from './NotFound'

export function ContactDetailView({ initialContact, sections }) {
  const seed = initialContact
  const { contact, refresh } = useContact(seed?.id, seed)

  useDocumentTitle(contact ? contactLabel(contact) : null)

  if (contact === null) return <NotFound />

  return (
    <ContactDetail contact={contact} onChanged={refresh}
      sections={sections} />
  )
}
