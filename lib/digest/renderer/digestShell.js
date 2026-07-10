const FRAME = 'font-family:Arial,Helvetica,sans-serif;color:#111;' +
  'max-width:640px;margin:0 auto;padding:16px'

const TITLE = '<h1 style="font-size:20px;margin:0 0 8px">' +
  'Weekly insights</h1>'

// Wrap the digest's sections in a simple, email-client-safe HTML frame.
export function digestShell(inner) {
  return `<div style="${FRAME}">${TITLE}${inner}</div>`
}
