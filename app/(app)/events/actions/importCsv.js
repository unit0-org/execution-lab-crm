'use server'

import { parseCsv } from '@/lib/luma/controllers/parseCsv'
import { importLumaGuests } from '@/lib/luma/controllers/importGuests'

export async function importCsvAction(_prev, formData) {
  const file = formData.get('file')

  if (!file || !file.name) return { error: 'Choose a CSV file.' }

  const text = await file.text()
  const rows = parseCsv(text)

  return importLumaGuests(file.name, rows)
}
