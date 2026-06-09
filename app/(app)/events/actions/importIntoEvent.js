'use server'

import { parseCsv } from '@/lib/luma/controllers/parseCsv'
import { importIntoEvent } from '@/lib/luma/controllers/importIntoEvent'
import { withOrg } from '@/lib/auth/withOrg'

export const importIntoEventAction = withOrg(
  async (organizationId, formData) => {
    const file = formData.get('file')
    const eventId = formData.get('eventId')

    if (!file || !file.name) return { error: 'Choose a CSV file.' }

    const text = await file.text()
    const rows = parseCsv(text)

    return importIntoEvent(organizationId, eventId, rows)
  }
)
