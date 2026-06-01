'use server'

import { contactAnswers } from '@/lib/event/controllers/contactAnswers'

export async function contactAnswersAction(contactId) {
  return contactAnswers(contactId)
}
