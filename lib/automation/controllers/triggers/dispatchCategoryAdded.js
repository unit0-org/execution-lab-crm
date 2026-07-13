import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: one category was attached to each of these contacts. A rule may
// filter on the specific category (trigger_config.categoryId).
export async function dispatchCategoryAdded(contactIds, categoryId) {
  for (const contactId of contactIds)
    await dispatchTrigger('category_added', { contactId, categoryId })
}
