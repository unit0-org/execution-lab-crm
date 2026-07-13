import { Contact } from '@/lib/contact/models'
import { FOLDERS } from './mergeFolders'

// Fold every loser's data in, then force-delete the losers so cascades fire.
export async function applyMerge(winnerId, loserIds, t) {
  for (const fold of FOLDERS) await fold(winnerId, loserIds, t)

  await Contact.destroy({
    where: { id: loserIds }, transaction: t, force: true
  })
}
