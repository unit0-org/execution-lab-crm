// A column carries no value: never set, or set to an empty string.
export function isBlank(value) {
  return value === null || value === undefined || value === ''
}
