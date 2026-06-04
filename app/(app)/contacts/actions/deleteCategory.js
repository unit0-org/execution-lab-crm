'use server'

import { deleteCategory } from '@/lib/contacts/deleteCategory'

export async function deleteCategoryAction(id) {
  return deleteCategory(id)
}
