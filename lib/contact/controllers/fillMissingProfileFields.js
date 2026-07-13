import { Contact } from '@/lib/contact/models'
import { profileBackfill } from './profileBackfill'

// The contact's own columns (name, birthday, LinkedIn, photo) live on the row
// itself, not in a contact-owned table, so no FK carries them to the winner:
// they die with the loser unless copied over first. Fill every column the
// winner left blank from the oldest loser that has one.
export async function fillMissingProfileFields(winnerId, loserIds, t) {
  const winner = await Contact.findByPk(winnerId, { transaction: t })
  const losers = await Contact.findAll({
    where: { id: loserIds },
    order: [['created_at', 'ASC']],
    transaction: t
  })
  const patch = profileBackfill(winner, losers)

  if (!Object.keys(patch).length) return

  await winner.update(patch, { transaction: t })
}
