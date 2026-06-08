'use client'

import { useContact } from '../hooks/useContact'
import { ContactDetail } from './ContactDetail'
import { NotFound } from './NotFound'

export function ContactDetailView({ initialContact }) {
  const seed = initialContact
  const { contact, refresh } = useContact(seed?.id, seed)

  if (contact === null) return <NotFound />

  return <ContactDetail contact={contact} onChanged={refresh} />
}
