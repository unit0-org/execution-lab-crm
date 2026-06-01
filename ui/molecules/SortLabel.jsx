'use client'

import { sortButtonStyle } from './Table.styles'
import { SortArrow } from './SortArrow'

const text = (col) => (typeof col === 'string' ? col : col.label)

export function SortLabel({ col, sort, onSort }) {
  if (typeof col === 'string' || !col.key || !onSort) {
    return <>{text(col)}</>
  }

  const active = sort?.key === col.key

  return (
    <button type="button" style={sortButtonStyle}
      onClick={() => onSort(col.key)}>
      {col.label}
      <SortArrow active={active} dir={sort?.dir} />
    </button>
  )
}
