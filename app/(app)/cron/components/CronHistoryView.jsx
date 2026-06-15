import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { CronHistoryBody } from './CronHistoryBody'

export function CronHistoryView({ runs }) {
  return (
    <Stack gap="md">
      <Heading gutter="none">Cron history</Heading>
      <CronHistoryBody runs={runs} />
    </Stack>
  )
}
