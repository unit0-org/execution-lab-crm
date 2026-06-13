import { ContactCategoryLink } from '@/lib/db/models'

// Give the winner every category its losers had (idempotent via the
// composite key), then drop the loser links.
export async function mergeCategoryLinks(winnerId, loserIds, t) {
  const links = await ContactCategoryLink.findAll({
    where: { contact_id: loserIds }, transaction: t
  })

  for (const link of links)
    await ContactCategoryLink.findOrCreate({
      where: { contact_id: winnerId, category_id: link.category_id },
      transaction: t
    })

  await ContactCategoryLink.destroy({
    where: { contact_id: loserIds }, transaction: t
  })
}
