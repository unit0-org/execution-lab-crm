import { Op } from 'sequelize'
import { Contact, ContactEmail, ContactPhone } from '@/lib/contact/models'
import { ContactGoogleLink } from '../models/ContactGoogleLink'

const LIMIT = 200

const linkedIds = (accountId) => ContactGoogleLink
  .findAll({
    where: { google_account_id: accountId },
    attributes: ['contact_id']
  })
  .then((rows) => rows.map((r) => r.contact_id))

const include = [
  { model: ContactEmail, as: 'contact_email' },
  { model: ContactPhone, as: 'contact_phone' }
]

// Contacts with no link on this account (capped), with child rows.
export async function unlinkedContacts(account) {
  const linked = await linkedIds(account.id)
  const where = {}

  if (linked.length) where.id = { [Op.notIn]: linked }

  const rows = await Contact.findAll({ where, include, limit: LIMIT })

  return rows.map((r) => r.toJSON())
}
