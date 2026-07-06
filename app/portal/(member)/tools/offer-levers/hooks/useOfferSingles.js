'use client'

import { setOfferFieldAction } from '../actions/setOfferField'
import { useDebouncer } from './useDebouncer'

// setField (debounced autosave for text singles) and setLever (immediate,
// since a slider change is discrete). Both flag the field saved on success.
export function useOfferSingles({ setValues, saved }) {
  const debounce = useDebouncer()

  const save = (type, value) =>
    setOfferFieldAction(type, value).then(() => saved.mark(type))

  const setField = (type) => (event) => {
    const { value } = event.target

    setValues((cur) => ({ ...cur, [type]: value }))
    debounce(type, () => save(type, value))
  }

  const setLever = (id) => (value) => {
    setValues((cur) => ({ ...cur, [id]: value }))
    save(id, value)
  }

  return { setField, setLever }
}
