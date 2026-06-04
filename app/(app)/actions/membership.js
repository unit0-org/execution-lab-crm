'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function membershipAction() {
  return currentMembership()
}
