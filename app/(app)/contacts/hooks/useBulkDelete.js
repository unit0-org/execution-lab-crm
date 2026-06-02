'use client'

import { bulkDeleteContactsAction } from '../actions/bulkDeleteContacts'

const ids = (contacts) => contacts.map((c) => c.id)

export function useBulkDelete(onDone) {
  return (contacts) =>
    bulkDeleteContactsAction(ids(contacts)).then(onDone)
}
