import { Table } from '@/ui/molecules/Table'
import { CohortRow } from './CohortRow'

const COLS = ['Cohort', 'Start', 'Status', 'Spots', 'Revenue', '']

export function CohortsList({ cohorts, onChanged, onEdit }) {
  return (
    <Table cols={COLS}>
      {cohorts.map((cohort) => (
        <CohortRow key={cohort.id} cohort={cohort}
          onChanged={onChanged} onEdit={onEdit} />
      ))}
    </Table>
  )
}
