'use server'

import { parseCsv } from '@/lib/luma/controllers/parseCsv'
import { importLumaGuests } from '@/lib/luma/controllers/importGuests'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function importCsvAction(_prev, formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const file = formData.get('file')

  if (!file || !file.name) return { error: 'Choose a CSV file.' }

  const text = await file.text()
  const rows = parseCsv(text)

  return importLumaGuests(m.organizationId, file.name, rows)
}
