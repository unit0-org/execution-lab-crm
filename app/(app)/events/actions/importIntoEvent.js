'use server'

import { parseCsv } from '@/lib/luma/controllers/parseCsv'
import { importIntoEvent } from '@/lib/luma/controllers/importIntoEvent'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function importIntoEventAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const file = formData.get('file')
  const eventId = formData.get('eventId')

  if (!file || !file.name) return { error: 'Choose a CSV file.' }

  const text = await file.text()
  const rows = parseCsv(text)

  return importIntoEvent(m.organizationId, eventId, rows)
}
