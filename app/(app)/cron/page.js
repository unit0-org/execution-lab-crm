import { redirect } from 'next/navigation'

// Cron now lives inside Settings; keep the old URL working.
export default function CronPage() {
  redirect('/settings?tab=cron')
}
