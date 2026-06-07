'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { BulkActions } from './BulkActions'
import { MergeModal } from './MergeModal'
import { useBulkDelete } from '../hooks/useBulkDelete'
import { useMergeFlow } from '../hooks/useMergeFlow'

export function ContactsToolbar({ contacts, selection, cats, onChanged }) {
  const refresh = () => { selection.clear(); onChanged() }
  const remove = useBulkDelete(refresh)
  const merge = useMergeFlow(refresh)
  const chosen = contacts.filter((c) => selection.ids.has(c.id))
  const count = selection.ids.size

  return (
    <>
      <StickyBar active={count > 0}>
        <BulkActions key={count > 0} count={count} canMerge={count > 1}
          chosen={chosen} cats={cats} onLabeled={onChanged}
          onDelete={() => remove(chosen)} onMerge={() => merge.start(chosen)} />
      </StickyBar>
      <MergeModal contacts={merge.review} onConfirm={merge.confirm}
        onCancel={merge.cancel} />
    </>
  )
}
