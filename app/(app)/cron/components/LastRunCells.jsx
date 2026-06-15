import { Td } from '@/ui/molecules/Td'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'
import { runTone, runLabel } from './cronRunStatus'

function NeverRun() {
  return (
    <>
      <Td>—</Td>
      <Td>—</Td>
    </>
  )
}

export function LastRunCells({ run }) {
  if (!run) return <NeverRun />

  return (
    <>
      <Td><DateText value={run.started_at} withTime /></Td>
      <Td><Badge tone={runTone(run)}>{runLabel(run)}</Badge></Td>
    </>
  )
}
