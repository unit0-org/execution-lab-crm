'use client'

import { useAccounts } from './useAccounts'
import { useContacts } from './useContacts'
import { useLabels } from './useLabels'
import { useContactTagMap } from './useContactTagMap'
import { useContactTypes } from './useContactTypes'
import { useContactTypeMap } from './useContactTypeMap'

export function useContactsBoardData() {
  const { accounts, refresh: a } = useAccounts()
  const { contacts, refresh: c } = useContacts()
  const { labels,   refresh: l } = useLabels()
  const { map,      refresh: m } = useContactTagMap()
  const { types,    refresh: t } = useContactTypes()
  const { map: tm,  refresh: tmR } = useContactTypeMap()

  return {
    accounts, contacts, labels, contactTagMap: map,
    types, contactTypeMap: tm,
    refresh: () => { a(); c(); l(); m(); t(); tmR() },
  }
}
