'use client'

import { addOfferInputAction } from '../actions/addOfferInput'
import { updateOfferInputAction } from '../actions/updateOfferInput'
import { removeOfferInputAction } from '../actions/removeOfferInput'
import { useDebouncer } from './useDebouncer'
import { editRow, appendRow, dropRow } from '../listOps'

const set = (setLists, type, fn) =>
  setLists((cur) => ({ ...cur, [type]: fn(cur[type]) }))

// Add / edit / remove repeatable inputs, mirrored to the DB per change.
export function useOfferLists({ setLists, saved }) {
  const debounce = useDebouncer()
  const addItem = (type) => () =>
    addOfferInputAction(type).then((row) =>
      set(setLists, type, (list) => appendRow(list, row)))
  const updateItem = (type, id) => (event) => {
    const { value } = event.target
    set(setLists, type, (list) => editRow(list, id, value))
    debounce(id, () =>
      updateOfferInputAction(id, value).then(() => saved.mark(id)))
  }
  const removeItem = (type, id) => () => {
    set(setLists, type, (list) => dropRow(list, id))
    removeOfferInputAction(id)
  }

  return { addItem, updateItem, removeItem }
}
