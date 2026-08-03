import { findHeldReservation } from '@/lib/registration/controllers'
import { holdEndsAt } from '@/lib/registration/models/holdEndsAt'
import { isoDate } from '@/lib/portal/isoDate'
import { longDateLabel } from '@/lib/portal/longDateLabel'

// The live reservation this register screen was opened with, or null. Its
// holder already has the seat, so they claim it — skipping the full check,
// since otherwise their own reservation is what reads back to them as sold
// out — and get a prefilled form telling them the day it goes.
export async function resolveReservation(cohortId, searchParams) {
  const { reservation } = await searchParams

  if (!reservation) return null

  const row = await findHeldReservation(cohortId, reservation)

  if (!row) return null

  return {
    token: reservation,
    prefill: row,
    releasesOn: longDateLabel(isoDate(holdEndsAt(row)))
  }
}
