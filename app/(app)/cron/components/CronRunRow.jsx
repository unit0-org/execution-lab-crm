import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'
import { runTone, runLabel, runDuration } from './cronRunStatus'
import { runSummary } from './cronRunSummary'

export function CronRunRow({ run }) {
  return (
    <Tr>
      <Td>{run.name}</Td>
      <Td><DateText value={run.started_at} withTime /></Td>
      <Td>{runDuration(run)}</Td>
      <Td><Badge tone={runTone(run)}>{runLabel(run)}</Badge></Td>
      <Td truncate>{runSummary(run)}</Td>
    </Tr>
  )
}
