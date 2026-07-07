'use client'

import { useDebouncer } from '@/ui/molecules/useDebouncer'
import { editRow, appendRow, dropRow, markActive } from '@/ui/molecules/listOps'

const set = (setLists, type, fn) =>
  setLists((cur) => ({ ...cur, [type]: fn(cur[type]) }))

// Manage lists of { id, value } rows keyed by type against the row actions:
// optimistic state, debounced value save, saved flag, and an active toggle.
export function useEditableLists({ setLists, saved, actions }) {
  const debounce = useDebouncer()
  const add = (type) =>
    actions.add(type).then((r) => set(setLists, type, (l) => appendRow(l, r)))
  const update = (type, id) => (event) => {
    const { value } = event.target
    set(setLists, type, (list) => editRow(list, id, value))
    debounce(id, () => actions.update(id, value).then(() => saved.mark(id)))
  }
  const remove = (type, id) => () => {
    set(setLists, type, (list) => dropRow(list, id))
    actions.remove(id)
  }
  const setActive = (type, id, active) => {
    set(setLists, type, (list) => markActive(list, id, active))
    actions.setActive(id, active)
  }

  return { add, update, remove, setActive }
}
