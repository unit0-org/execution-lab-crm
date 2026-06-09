'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contacts/create'
import { readContactForm } from '@/lib/contacts/form'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function createContactAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const { first, last, emails } = readContactForm(formData)
  const res = await createContact(m.organizationId, first, last, emails)

  if (res.error) return { error: res.error }

  redirect(`/contacts/${res.id}`)
}
