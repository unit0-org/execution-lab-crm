'use client'

import { Select } from '../atoms/Select'
import { sizeStyle } from './Pagination.styles'

const OPTIONS = [
  { value: '25', label: '25 / page' },
  { value: '50', label: '50 / page' },
  { value: '100', label: '100 / page' }
]

// Optional page-size control for Pagination; renders only when wired.
export function PageSizeSelect({ perPage, onPerPage }) {
  if (!onPerPage) return null

  const onChange = (e) => onPerPage(Number(e.target.value))

  return (
    <div style={sizeStyle}>
      <Select options={OPTIONS} value={String(perPage)} onChange={onChange} />
    </div>
  )
}
