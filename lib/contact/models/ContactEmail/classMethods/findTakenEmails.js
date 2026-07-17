import { Op } from 'sequelize'
import { normalizeEmail } from '@/lib/contact/controllers/normalizeEmail'

// Which of these emails already belong to a contact. An email is unique
// across contacts, so this is what makes one "already in use". Stored
// emails are normalized, so match on the normalized form.
export async function findTakenEmails(emails) {
  const wanted = emails.map((email) => normalizeEmail(email))

  if (!wanted.length) return []

  const rows = await this.findAll({
    where: { email: { [Op.in]: wanted } },
    attributes: ['email']
  })

  return rows.map((row) => row.email)
}
