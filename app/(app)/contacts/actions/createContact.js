'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contacts/create'
import { readContactForm } from '@/lib/contacts/form'

export async function createContactAction(formData) {
  const { first, last, emails } = readContactForm(formData)
  const res = await createContact(first, last, emails)

  if (res.error) return { error: res.error }

  redirect(`/contacts/${res.id}`)
}
