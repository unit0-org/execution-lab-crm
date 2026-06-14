import { Contact } from '@/lib/contact/models'

// Replace a contact's categories with the given set (0+ category ids).
// Sequelize's belongsToMany setter diffs the join table for us.
export async function setContactCategories(contactId, categoryIds) {
  const contact = await Contact.findOne({
    where: { id: contactId }
  })

  if (!contact) return { ok: true }

  return contact.setCategories(categoryIds)
}
