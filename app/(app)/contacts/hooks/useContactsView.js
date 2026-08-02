'use client'

import { useContacts } from './useContacts'
import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { useContactSearch } from './useContactSearch'
import { useLabelFilter } from './useLabelFilter'
import { useParticipationFilter } from './useParticipationFilter'
import { useCategories } from './useCategories'
import { filterByLabels, NO_LABELS } from '../components/filterByLabels'

// Wires the contacts list: server data (lead + participation criteria) →
// label filter → search → selection, plus the label list shared by the
// filter and the label menus, and the event options for the picker.
export function useContactsView(criteria, initialContacts, eventOptions) {
  const { contacts, reload } = useContacts(criteria, initialContacts)
  const labelFilter = useLabelFilter()
  const participation = useParticipationFilter(criteria)
  const cats = useCategories(reload)
  const labelOptions = [NO_LABELS, ...cats.categories]
  const byLabel = filterByLabels(contacts, labelFilter.ids)
  const search = useContactSearch(byLabel)
  const selection = useRowSelection(search.results)

  return {
    contacts, cats, labelOptions, labelFilter, participation, eventOptions,
    search, selection, reload
  }
}
