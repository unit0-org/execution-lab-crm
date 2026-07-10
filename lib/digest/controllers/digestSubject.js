import { todayIso } from '@/lib/portal/todayIso'

// The digest email subject, dated to the business-tz send day.
export function digestSubject() {
  return `Weekly insights — ${todayIso()}`
}
