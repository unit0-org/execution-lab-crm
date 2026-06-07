'use server'

import { setCategoryColor } from '@/lib/contacts/setCategoryColor'

export async function setCategoryColorAction(id, color) {
  return setCategoryColor(id, color)
}
