import { Op } from 'sequelize'
import { ContactMergeDismissal } from '@/lib/contact-merge-and-fix/models'

// Contact-owned: drop any "not duplicates" dismissal that involves a loser.
// The loser is about to be destroyed, so the pair is moot. See the merge
// invariant in ARCHITECTURE.md.
export async function mergeDismissals(winnerId, loserIds, t) {
  await ContactMergeDismissal.destroy({
    where: {
      [Op.or]: [{ contact_a_id: loserIds }, { contact_b_id: loserIds }]
    },
    transaction: t
  })
}
