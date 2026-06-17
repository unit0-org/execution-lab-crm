import { Contact } from '@/lib/contact/models'

// Set linkedin_url only when the contact has none; returns 1 if set, else 0.
export async function fillLinkedinTx(contactId, url, t) {
  if (!url) return 0

  const [count] = await Contact.update(
    { linkedin_url: url },
    { where: { id: contactId, linkedin_url: null }, transaction: t }
  )

  return count
}
