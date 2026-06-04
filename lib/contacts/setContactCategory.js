import { Contact } from '@/lib/db/models'

// Assign a contact to a category (null restores the default lead).
export function setContactCategory(contactId, categoryId) {
  return Contact.update(
    { category_id: categoryId || null },
    { where: { id: contactId } }
  )
}
