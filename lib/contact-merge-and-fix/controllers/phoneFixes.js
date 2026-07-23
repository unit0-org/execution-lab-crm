import { ContactPhone } from '@/lib/contact/models'
import { isUntidy } from '../untidy'
import { normalizeText } from '../normalizeText'

// A phone with stray whitespace to tidy (its digits are left untouched).
export async function phoneFixes() {
  const rows = await ContactPhone.findAll({ attributes: ['id', 'phone'] })

  return rows.filter((row) => isUntidy(row.phone)).map(toPhoneFix)
}

const toPhoneFix = (row) => ({
  type: 'phone',
  id: row.id,
  current: row.phone,
  proposed: normalizeText(row.phone)
})
