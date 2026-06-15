import { Table } from '@/ui/molecules/Table'
import { CronRunRow } from './CronRunRow'

const COLS = ['Cron', 'Started', 'Duration', 'Status', 'Result']

export function CronRunsTable({ runs }) {
  return (
    <Table cols={COLS}>
      {runs.map(run => <CronRunRow key={run.id} run={run} />)}
    </Table>
  )
}
