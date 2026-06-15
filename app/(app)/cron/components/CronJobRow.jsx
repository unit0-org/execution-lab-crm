import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { LastRunCells } from './LastRunCells'
import { RunJobButton } from './RunJobButton'

export function CronJobRow({ job, onRan }) {
  return (
    <Tr>
      <Td>{job.label}</Td>
      <LastRunCells run={job.lastRun} />
      <Td><RunJobButton name={job.name} onRan={onRan} /></Td>
    </Tr>
  )
}
