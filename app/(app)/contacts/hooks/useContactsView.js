'use client'

import { useContacts } from './useContacts'
import { useContactSelection } from './useContactSelection'
import { useContactSearch } from './useContactSearch'
import { useLabelFilter } from './useLabelFilter'
import { useCategories } from './useCategories'
import { filterByLabels } from '../components/filterByLabels'

// Wires the contacts list: server data → label filter → search → selection,
// plus the label list shared by the filter and the label menus.
export function useContactsView(filter, initialContacts) {
  const { contacts, reload } = useContacts(filter, initialContacts)
  const labelFilter = useLabelFilter()
  const cats = useCategories(reload)
  const byLabel = filterByLabels(contacts, labelFilter.ids)
  const search = useContactSearch(byLabel)
  const selection = useContactSelection(search.results)

  return { contacts, cats, labelFilter, search, selection, reload }
}
