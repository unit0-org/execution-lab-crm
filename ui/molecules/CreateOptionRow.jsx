import { MenuRow } from './MenuRow'

// Inline "create" row shown when the query matches no existing option.
export function CreateOptionRow({ show, label, query, onCreate }) {
  if (!show) return null

  return (
    <MenuRow label={`+ New ${label} “${query}”`} onClick={onCreate} />
  )
}
