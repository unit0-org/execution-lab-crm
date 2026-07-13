'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { sendWeeklyDigest } from '@/lib/digest/controllers/sendWeeklyDigest'

export const sendDigestNowAction = withAdmin(async () => {
  try {
    return { ok: true, summary: await sendWeeklyDigest({ force: true }) }
  } catch (e) {
    return { error: e.message }
  }
})
