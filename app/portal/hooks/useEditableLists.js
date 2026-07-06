'use client'

import { useDebouncer } from '@/ui/molecules/useDebouncer'
import { editRow, appendRow, dropRow } from '@/ui/molecules/listOps'

const set = (setLists, type, fn) =>
  setLists((cur) => ({ ...cur, [type]: fn(cur[type]) }))

// Manage lists of { id, value } rows keyed by type against add/update/remove
// actions: optimistic state, debounced save, and a saved flag per row. Lives
// in a hooks dir (not ui/) because it consumes the action promises.
export function useEditableLists({ setLists, saved, actions }) {
  const debounce = useDebouncer()
  const add = (type) =>
    actions.add(type).then((row) =>
      set(setLists, type, (list) => appendRow(list, row)))
  const update = (type, id) => (event) => {
    const { value } = event.target
    set(setLists, type, (list) => editRow(list, id, value))
    debounce(id, () => actions.update(id, value).then(() => saved.mark(id)))
  }
  const remove = (type, id) => () => {
    set(setLists, type, (list) => dropRow(list, id))
    actions.remove(id)
  }

  return { add, update, remove }
}
