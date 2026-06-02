'use client'

import { sortButtonStyle } from './Table.styles'
import { SortArrow } from './SortArrow'
import { Checkbox } from '../atoms/Checkbox'

const text = (col) => (typeof col === 'string' ? col : col.label)

export function SortLabel({ col, sort, onSort }) {
  if (col?.select) {
    return <Checkbox checked={col.checked} onChange={col.onToggle}
      indeterminate={col.indeterminate} label="Select all" />
  }

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
