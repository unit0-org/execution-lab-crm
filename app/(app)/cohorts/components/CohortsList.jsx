'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { CohortRow } from './CohortRow'
import { columns } from './cohortColumns'

export function CohortsList({ cohorts, onChanged, onEdit }) {
  const { sorted, sort, toggle } =
    useTableSort(cohorts, columns, 'start', 'desc')

  return (
    <Table cols={columns} sort={sort} onSort={toggle}>
      {sorted.map((cohort) => (
        <CohortRow key={cohort.id} cohort={cohort}
          onChanged={onChanged} onEdit={onEdit} />
      ))}
    </Table>
  )
}
