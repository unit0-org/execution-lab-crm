'use client'

import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { MonoLabel } from '../atoms/MonoLabel'
import { PageSizeSelect } from './PageSizeSelect'
import { navStyle } from './Pagination.styles'

/**
 * Page navigator: prev/next chevrons around a "page / total" label, with an
 * optional page-size select (pass `perPage` + `onPerPage`). Hides when
 * there is only one page. Pair with `usePagination`.
 */
export function Pagination({ page, pageCount, onPage, perPage, onPerPage }) {
  if (pageCount < 2) return null

  return (
    <nav style={navStyle} aria-label="Pagination">
      <IconButton label="Previous page" disabled={page <= 1}
        onClick={() => onPage(page - 1)}>
        <Icon name="chevronLeft" size={16} />
      </IconButton>
      <MonoLabel>{`${page} / ${pageCount}`}</MonoLabel>
      <IconButton label="Next page" disabled={page >= pageCount}
        onClick={() => onPage(page + 1)}>
        <Icon name="chevronRight" size={16} />
      </IconButton>
      <PageSizeSelect perPage={perPage} onPerPage={onPerPage} />
    </nav>
  )
}
