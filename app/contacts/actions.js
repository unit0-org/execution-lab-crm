'use server'

import { redirect } from 'next/navigation'
import { createContact } from '@/lib/contacts/create'
import { updateContact } from '@/lib/contacts/update'
import { deleteContact } from '@/lib/contacts/remove'
import { readContactForm } from '@/lib/contacts/form'

export async function createContactAction(formData) {
  const { first, last, emails } = readContactForm(formData)
  const res = await createContact(first, last, emails)

  if (res.error) return { error: res.error }

  redirect(`/contacts/${res.id}`)
}

export async function updateContactAction(formData) {
  const id = formData.get('id')
  const value = formData.get('value') || null
  await updateContact(id, { [formData.get('field')]: value })

  return { ok: true }
}

export async function deleteContactAction(formData) {
  await deleteContact(formData.get('id'))
  redirect('/contacts')
}
