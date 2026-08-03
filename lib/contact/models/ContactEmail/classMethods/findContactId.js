import { Op } from 'sequelize'

// Case-insensitive lookup of the contact that owns an email. Takes an
// optional transaction so a caller resolving an identity under a lock
// reads inside it.
export async function findContactId(email, transaction) {
  const row = await this.findOne({
    where: { email: { [Op.iLike]: email } },
    transaction
  })

  return row ? row.contact_id : null
}
