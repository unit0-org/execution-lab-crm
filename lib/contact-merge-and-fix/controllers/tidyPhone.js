import { ContactPhone } from '@/lib/contact/models'
import { normalizeText } from '../normalizeText'

// Normalize one phone's whitespace, re-read from the row (never trusting a
// value supplied by the caller).
export async function tidyPhone(id, t) {
  const row = await ContactPhone.findByPk(id, { transaction: t })

  if (!row) return

  await row.update({ phone: normalizeText(row.phone) }, { transaction: t })
}
