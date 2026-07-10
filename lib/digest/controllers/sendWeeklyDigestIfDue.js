import { todayIso } from '@/lib/portal/todayIso'
import { firstOrganizationId } from '@/lib/org/controllers/firstOrganizationId'
import { ensureDigestSetting } from './ensureDigestSetting'
import { weekdayOf } from './weekTiming'
import { alreadySentThisWeek } from './alreadySentThisWeek'
import { sendWeeklyDigest } from './sendWeeklyDigest'

const MONDAY = 1

// The weekly cron entry: send the digest once, gated on the business-tz
// weekday and the last-sent timestamp so a week is never double-sent (and
// never skipped — the once-daily cron sends on the Monday run, any hour).
export async function sendWeeklyDigestIfDue() {
  const iso = todayIso()

  if (weekdayOf(iso) !== MONDAY) return { skipped: 'not monday' }

  const setting = await ensureDigestSetting(await firstOrganizationId())

  if (alreadySentThisWeek(setting.last_sent_at, iso)) {
    return { skipped: 'already sent' }
  }

  return sendWeeklyDigest()
}
