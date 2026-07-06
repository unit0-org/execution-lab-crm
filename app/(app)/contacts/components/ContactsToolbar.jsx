'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { BulkActions } from './BulkActions'
import { MergeModal } from './MergeModal'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { bulkDeleteContactsAction } from '../actions/bulkDeleteContacts'
import { useMergeFlow } from '../hooks/useMergeFlow'

export function ContactsToolbar({ contacts, selection, cats, onChanged }) {
  const refresh = () => { selection.clear(); onChanged() }
  const remove = useActionHandler(bulkDeleteContactsAction, { onDone: refresh })
  const merge = useMergeFlow(refresh)
  const chosen = contacts.filter((c) => selection.ids.has(c.id))
  const count = selection.ids.size

  return (
    <>
      <StickyBar active={count > 0}>
        <BulkActions key={count > 0} count={count} canMerge={count > 1}
          chosen={chosen} cats={cats} onLabeled={onChanged}
          onDelete={() => remove(chosen.map((c) => c.id))}
          onMerge={() => merge.start(chosen)} />
      </StickyBar>
      <MergeModal contacts={merge.review} onConfirm={merge.confirm}
        onCancel={merge.cancel} />
    </>
  )
}
