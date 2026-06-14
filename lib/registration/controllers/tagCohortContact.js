import { findOrCreateCategory }
  from '@/lib/contact/controllers/findOrCreateCategory'
import { addCategoryToContacts }
  from '@/lib/contact/controllers/addCategoryToContacts'
import { cohortTagName } from './cohortTagName'

// Tag the contact with its cohort category (find-or-create); never
// removes existing tags.
export async function tagCohortContact(organizationId, contactId, cohort) {
  const name = await cohortTagName(organizationId, cohort)
  const categoryId = await findOrCreateCategory(organizationId, name)

  await addCategoryToContacts(organizationId, [contactId], categoryId)
}
