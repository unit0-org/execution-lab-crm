import { sequelize } from '../../db/sequelize'
import { GoogleAccount } from '../models/GoogleAccount'

// Make one account the sole primary (one primary overall).
export async function setPrimaryAccount(id) {
  await sequelize.transaction(async (t) => {
    await GoogleAccount.update(
      { is_primary: false }, { where: {}, transaction: t }
    )
    await GoogleAccount.update(
      { is_primary: true },
      { where: { id }, transaction: t }
    )
  })

  return { ok: true }
}
