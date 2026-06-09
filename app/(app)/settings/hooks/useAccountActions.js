'use client'

import { setPrimaryAccountAction } from '../actions/setPrimaryAccount'
import { setSyncEnabledAction } from '../actions/setContactsSyncEnabled'
import { disconnectAccountAction } from '../actions/disconnectGoogleAccount'

// Row mutations for a Google account; each refreshes the table on done.
export function useAccountActions(id, onChanged) {
  const makePrimary = () => {
    setPrimaryAccountAction(id).then(onChanged)
  }

  const setSync = (enabled) => {
    setSyncEnabledAction(id, enabled).then(onChanged)
  }

  const disconnect = () => {
    disconnectAccountAction(id).then(onChanged)
  }

  return { makePrimary, setSync, disconnect }
}
