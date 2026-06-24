// Pure helpers for the invite picker's selected-contact list.
const has = (list, value) => list.some((p) => p.value === value)

export const addUnique = (list, option) =>
  has(list, option.value) ? list : [...list, option]

export const removeValue = (list, value) =>
  list.filter((p) => p.value !== value)

export const withoutPicked = (options, picked) =>
  options.filter((o) => !has(picked, o.value))
