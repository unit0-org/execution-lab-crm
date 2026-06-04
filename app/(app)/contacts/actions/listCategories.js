'use server'

import { listCategories } from '@/lib/contacts/listCategories'

export async function listCategoriesAction() {
  return listCategories()
}
