'use server'

import { contactNuggets } from '@/lib/contacts/contactNuggets'

export async function contactAnswersAction(contactId) {
  return await contactNuggets(contactId)
}
