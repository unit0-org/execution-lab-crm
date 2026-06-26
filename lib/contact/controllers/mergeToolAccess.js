import { PortalToolAccess } from '@/lib/portalTool/models'

// Give the winner every tool its losers had (idempotent via the
// UNIQUE(contact_id, tool_key)), then drop the loser grants.
export async function mergeToolAccess(winnerId, loserIds, t) {
  const rows = await PortalToolAccess.findAll({
    where: { contact_id: loserIds }, transaction: t
  })

  for (const row of rows)
    await PortalToolAccess.findOrCreate({
      where: { contact_id: winnerId, tool_key: row.tool_key },
      transaction: t
    })

  await PortalToolAccess.destroy({
    where: { contact_id: loserIds }, transaction: t
  })
}
