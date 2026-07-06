'use client'

import { useContacts } from './useContacts'
import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { useContactSearch } from './useContactSearch'
import { useLabelFilter } from './useLabelFilter'
import { useCategories } from './useCategories'
import { filterByLabels, NO_LABELS } from '../components/filterByLabels'

// Wires the contacts list: server data → label filter → search → selection,
// plus the label list shared by the filter and the label menus.
export function useContactsView(filter, initialContacts) {
  const { contacts, reload } = useContacts(filter, initialContacts)
  const labelFilter = useLabelFilter()
  const cats = useCategories(reload)
  const labelOptions = [NO_LABELS, ...cats.categories]
  const byLabel = filterByLabels(contacts, labelFilter.ids)
  const search = useContactSearch(byLabel)
  const selection = useRowSelection(search.results)

  return {
    contacts, cats, labelOptions, labelFilter, search, selection, reload
  }
}
