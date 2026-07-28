import { sequelize } from '../../../../db/sequelize'
import { CohortFolder } from '../../CohortFolder'
import { CohortResource } from '../../CohortResource'

// Delete the cohort together with the rows it owns — its folders and the
// resources inside them — in one transaction, removing each level
// explicitly instead of trusting the database cascade. Everything that
// points at a cohort from OUTSIDE (registrations, waitlist invites) blocks
// the delete instead; see findDeleteBlockers.
export function destroyWithFolders() {
  return sequelize.transaction(async (t) => {
    const owned = { cohort_id: this.id }
    const folders = await CohortFolder.findAll({
      where: owned, transaction: t
    })
    const folderIds = folders.map((folder) => folder.id)

    await CohortResource.destroy({
      where: { folder_id: folderIds }, transaction: t
    })
    await CohortFolder.destroy({ where: owned, transaction: t })

    return this.destroy({ transaction: t })
  })
}
