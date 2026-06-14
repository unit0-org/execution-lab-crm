// Move a child table's rows from the losers to the winner. Safe only for
// tables with no per-contact uniqueness, where a straight reassign can't
// collide.
export async function claimRows(Model, winnerId, loserIds, t) {
  await Model.update(
    { contact_id: winnerId },
    { where: { contact_id: loserIds }, transaction: t }
  )
}
