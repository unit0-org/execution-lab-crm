import { Cohort } from '../models'
import { cohortWithFolders } from './cohortWithFolders'

// Every cohort with its folders and resources, newest first — the portal
// Resources view for an owner, who sees all cohorts without a registration.
export async function listAllResources() {
  const rows = await Cohort.findAll({ order: [['start_date', 'DESC']] })

  return Promise.all(rows.map((row) => cohortWithFolders(row.toJSON())))
}
