// The path portion of a LinkedIn URL, e.g. '/in/jane' — for display.
export function linkedInPath(url) {
  const withScheme = /^https?:\/\//.test(url) ? url : `https://${url}`

  try {
    return new URL(withScheme).pathname.replace(/\/+$/, '')
  } catch (e) {
    return url
  }
}
