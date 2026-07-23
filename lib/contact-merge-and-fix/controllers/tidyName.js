import { Contact } from '@/lib/contact/models'
import { normalizeText } from '../normalizeText'

const tidy = (value) => (value ? normalizeText(value) : value)

// Normalize a contact's first/last name whitespace, re-read from the row
// (never trusting a value supplied by the caller). Leaves blanks as-is.
export async function tidyName(id, t) {
  const row = await Contact.findByPk(id, { transaction: t })

  if (!row) return

  await row.update({
    first_name: tidy(row.first_name),
    last_name: tidy(row.last_name)
  }, { transaction: t })
}
