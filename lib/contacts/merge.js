import { sequelize } from '@/lib/db/sequelize'
import { Contact } from '@/lib/db/models'
import { mergeParticipations } from './mergeParticipations'
import { mergeEmails } from './mergeEmails'
import { mergePhones } from './mergePhones'
import { allContactsInOrg } from './allContactsInOrg'

// Fold every loser contact into the winner, preserving all activity
// (events, answers, emails, phones) and dropping only true duplicates.
export async function mergeContacts(organizationId, winnerId, loserIds) {
  const ids = [winnerId, ...loserIds]

  if (!await allContactsInOrg(organizationId, ids)) {
    return { error: 'Not allowed' }
  }

  return sequelize.transaction(async (t) => {
    await mergeParticipations(winnerId, loserIds, t)
    await mergeEmails(winnerId, loserIds, t)
    await mergePhones(winnerId, loserIds, t)
    await Contact.destroy({
      where: { id: loserIds, organization_id: organizationId },
      transaction: t
    })
  })
}
