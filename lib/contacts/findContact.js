import { Op } from 'sequelize'
import { ContactEmail, ContactPhone } from '@/lib/db/models'

export async function findContactIdByEmail(email) {
  const row = await ContactEmail.findOne({
    where: { email: { [Op.iLike]: email } }
  })

  return row ? row.contact_id : null
}

export async function findContactIdByPhone(phone) {
  const row = await ContactPhone.findOne({
    where: { phone }
  })

  return row ? row.contact_id : null
}
