import { sequelize } from '../../db/sequelize'
import { GoogleAccount } from '../models/GoogleAccount'

// Make one account the org's sole primary (one primary per org).
export async function setPrimaryAccount(organizationId, id) {
  await sequelize.transaction(async (t) => {
    const where = { organization_id: organizationId }

    await GoogleAccount.update({ is_primary: false }, { where, transaction: t })
    await GoogleAccount.update(
      { is_primary: true },
      { where: { ...where, id }, transaction: t }
    )
  })

  return { ok: true }
}
