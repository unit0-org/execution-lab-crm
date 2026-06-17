import { ContactEmail } from '@/lib/contact/models'
import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'

// Contact id for an exact (normalized) email match, or null. Emails are
// stored lowercased, so plain equality is the case-insensitive match.
export async function findContactIdByEmail(email, t) {
  const value = normalizeEmail(email)

  if (!value) return null

  const row = await ContactEmail.findOne({
    where: { email: value }, transaction: t
  })

  return row ? row.contact_id : null
}
