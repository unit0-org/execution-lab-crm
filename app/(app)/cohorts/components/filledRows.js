// Map [key, label] field specs to {label, value} rows for the values that
// are actually present on the source, dropping blanks.
export function filledRows(source, fields) {
  return fields
    .filter(([key]) => source[key])
    .map(([key, label]) => ({ label, value: source[key] }))
}
