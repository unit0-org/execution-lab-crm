'use client'

import { BulkActions } from './BulkActions'
import { MergeModal } from './MergeModal'
import { useBulkDelete } from '../hooks/useBulkDelete'
import { useMergeFlow } from '../hooks/useMergeFlow'

export function ContactsToolbar({ contacts, selection, onChanged }) {
  const refresh = () => { selection.clear(); onChanged() }
  const remove = useBulkDelete(refresh)
  const merge = useMergeFlow(refresh)
  const chosen = contacts.filter((c) => selection.ids.has(c.id))

  if (selection.ids.size === 0) return null

  return (
    <>
      <BulkActions count={selection.ids.size}
        canMerge={selection.ids.size > 1}
        onDelete={() => remove(chosen)}
        onMerge={() => merge.start(chosen)} />
      <MergeModal contacts={merge.review} onConfirm={merge.confirm}
        onCancel={merge.cancel} />
    </>
  )
}
