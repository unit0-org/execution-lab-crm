'use server'

import { createCategory } from '@/lib/contacts/createCategory'

export async function createCategoryAction(name, color) {
  return createCategory(name, color)
}
