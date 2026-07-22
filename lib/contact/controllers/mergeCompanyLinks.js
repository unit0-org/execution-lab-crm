import { CompanyContact } from '@/lib/company/models'

// Give the winner every company link its losers had (dedupe per company,
// the winner's own role wins), then drop the loser links.
export async function mergeCompanyLinks(winnerId, loserIds, t) {
  const links = await CompanyContact.findAll({
    where: { contact_id: loserIds }, transaction: t
  })

  for (const link of links)
    await CompanyContact.findOrCreate({
      where: { company_id: link.company_id, contact_id: winnerId },
      defaults: { role: link.role },
      transaction: t
    })

  await CompanyContact.destroy({
    where: { contact_id: loserIds }, transaction: t
  })
}
