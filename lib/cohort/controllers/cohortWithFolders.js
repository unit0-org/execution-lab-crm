import { listCohortFolders } from './listCohortFolders'

const pickCohort = (c) =>
  ({ id: c.id, label: c.label, slug: c.slug, start_date: c.start_date })

// A cohort (plain object) paired with its folders and resources — the shape
// the portal Resources page renders, shared by the member and owner loaders.
export async function cohortWithFolders(cohort) {
  const folders = await listCohortFolders(cohort.id)

  return { cohort: pickCohort(cohort), folders }
}
