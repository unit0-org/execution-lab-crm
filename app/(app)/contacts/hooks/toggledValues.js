import { toggledSet } from './labelFilterUrl'

// The list with `value` toggled in or out, as a new array.
export const toggledValues = (list, value) =>
  [...toggledSet(new Set(list), value)]
