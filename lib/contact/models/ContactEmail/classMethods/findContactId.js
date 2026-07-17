import { Op } from 'sequelize'

// Case-insensitive lookup of the contact that owns an email.
export async function findContactId(email) {
  const row = await this.findOne({
    where: { email: { [Op.iLike]: email } }
  })

  return row ? row.contact_id : null
}
