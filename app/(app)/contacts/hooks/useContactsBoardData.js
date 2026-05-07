'use client'

import { useAccounts } from './useAccounts'
import { useContacts } from './useContacts'
import { useLabels } from './useLabels'
import { useContactTagMap } from './useContactTagMap'

export function useContactsBoardData() {
  const { accounts, refresh: a } = useAccounts()
  const { contacts, refresh: c } = useContacts()
  const { labels,   refresh: l } = useLabels()
  const { map,      refresh: m } = useContactTagMap()

  return {
    accounts, contacts, labels, contactTagMap: map,
    refresh: () => { a(); c(); l(); m() },
  }
}
