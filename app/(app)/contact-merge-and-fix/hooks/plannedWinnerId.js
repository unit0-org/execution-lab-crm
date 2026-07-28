import { planMerge } from '@/app/(app)/contacts/hooks/planMerge'

// The contact a batch merge would keep. `null` means the group's contacts
// disagree on name, so no one can pick the survivor but the person doing
// the merge — that group stays out of the batch and goes through review.
export const plannedWinnerId = (group) => planMerge(group.contacts).winnerId

export const isBatchMergeable = (group) => Boolean(plannedWinnerId(group))
