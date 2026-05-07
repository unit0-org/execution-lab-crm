'use client'

import { useAccounts } from './useAccounts'
import { useContacts } from './useContacts'
import { useLabels } from './useLabels'
import { useContactTagMap } from './useContactTagMap'

// Bundles every async source the contacts page needs and exposes a
// single `refresh()` that re-pulls all of them after a mutation.
export function useContactsBoardData() {
  const { accounts, refresh: a } = useAccounts()
  const { contacts, refresh: c } = useContacts()
  const { labels, refresh: l } = useLabels()
  const { map, refresh: m } = useContactTagMap()

  return { accounts, contacts, labels, contactTagMap: map, refresh: () => { a(); c(); l(); m() } }
}
