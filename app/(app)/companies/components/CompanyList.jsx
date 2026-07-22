'use client'

import { Table } from '@/ui/molecules/Table'
import { useTableSort } from '@/ui/molecules/useTableSort'
import { usePagination } from '@/ui/molecules/usePagination'
import { Pagination } from '@/ui/molecules/Pagination'
import { CompanyRow } from './CompanyRow'
import { columns } from './companyColumns'

export function CompanyList({ companies, onChanged }) {
  const { sorted, sort, toggle } = useTableSort(companies, columns, 'name')
  const p = usePagination(sorted)

  return (
    <>
      <Table cols={columns} sort={sort} onSort={toggle}>
        {p.paged.map((company) => (
          <CompanyRow key={company.id} company={company}
            onChanged={onChanged} />
        ))}
      </Table>
      <Pagination page={p.page} pageCount={p.pageCount} onPage={p.setPage}
        perPage={p.perPage} onPerPage={p.setPerPage} />
    </>
  )
}
