import { Text } from '@/ui/atoms/Text'
import { CronRunsTable } from './CronRunsTable'

// The runs table, or a hint when no cron has run yet.
export function CronHistoryBody({ runs }) {
  if (!runs.length) return <Text tone="muted">No cron runs yet.</Text>

  return <CronRunsTable runs={runs} />
}
