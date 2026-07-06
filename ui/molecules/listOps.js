// Pure transforms on a list of { id, value } rows.
export const editRow = (list, id, value) =>
  list.map((row) => (row.id === id ? { ...row, value } : row))

export const appendRow = (list, row) => [...(list || []), row]

export const dropRow = (list, id) => list.filter((row) => row.id !== id)
