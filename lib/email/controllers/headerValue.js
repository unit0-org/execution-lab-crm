// The value of the named header (case-insensitive), or '' if absent.
export function headerValue(headers, name) {
  const target = name.toLowerCase()
  const found = headers.find((header) => header.name.toLowerCase() === target)

  return found ? found.value : ''
}
