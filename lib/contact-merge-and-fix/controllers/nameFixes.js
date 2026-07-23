import { Contact } from '@/lib/contact/models'
import { isUntidy } from '../untidy'
import { normalizeText } from '../normalizeText'

// A contact whose first or last name carries stray whitespace to tidy.
export async function nameFixes() {
  const rows = await Contact.findAll({
    attributes: ['id', 'first_name', 'last_name']
  })

  return rows.filter(hasUntidyName).map(toNameFix)
}

const hasUntidyName = (c) => isUntidy(c.first_name) || isUntidy(c.last_name)

const toNameFix = (c) => ({
  type: 'name',
  id: c.id,
  current: [c.first_name, c.last_name].filter(Boolean).join(' '),
  proposed: [c.first_name, c.last_name].map(normalizeText)
    .filter(Boolean).join(' ')
})
