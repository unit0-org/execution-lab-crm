// How many rows have a truthy flag.
export function countBy(rows, flag) {
  return rows.filter((row) => row[flag]).length
}

// The sum of one numeric field across rows.
export function sumBy(rows, field) {
  return rows.reduce((total, row) => total + row[field], 0)
}
