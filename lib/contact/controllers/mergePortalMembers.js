import { PortalMember } from '@/lib/portalMember/models'

// Keep one portal membership for the winner: if the winner already has a
// row, drop the losers'; otherwise hand a loser's row (with its user link)
// to the winner. UNIQUE(contact_id) forbids a blind reassign.
export async function mergePortalMembers(winnerId, loserIds, t) {
  const winner = await PortalMember.findOne({
    where: { contact_id: winnerId }, transaction: t
  })

  if (!winner) {
    const [keep] = await PortalMember.findAll({
      where: { contact_id: loserIds }, transaction: t, limit: 1
    })

    if (keep) await keep.update({ contact_id: winnerId }, { transaction: t })
  }

  await PortalMember.destroy({
    where: { contact_id: loserIds }, transaction: t
  })
}
