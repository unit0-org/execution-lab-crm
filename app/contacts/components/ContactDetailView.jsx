'use client'

import { useParams } from 'next/navigation'
import { useContact } from '../hooks/useContact'
import { ContactDetail } from './ContactDetail'
import { Loading } from './Loading'
import { NotFound } from './NotFound'

export function ContactDetailView() {
  const { id } = useParams()
  const { contact } = useContact(id)

  if (contact === undefined) return <Loading />

  if (contact === null) return <NotFound />

  return <ContactDetail contact={contact} />
}
