import { Table } from '@/ui/molecules/Table'
import { CronJobRow } from './CronJobRow'

const COLS = ['Operation', 'Last run', 'Status', '']

export function CronJobsTable({ jobs, onRan }) {
  return (
    <Table cols={COLS}>
      {jobs.map(job => (
        <CronJobRow key={job.name} job={job} onRan={onRan} />
      ))}
    </Table>
  )
}
