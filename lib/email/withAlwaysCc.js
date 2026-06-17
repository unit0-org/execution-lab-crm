import { alwaysCc } from './controllers/alwaysCc'

const toList = (value) =>
  (Array.isArray(value) ? value : [value]).filter(Boolean)

const lower = (address) => String(address).toLowerCase()

// Add the always-CC address to a Resend message, unless the recipient or an
// existing CC already includes it. Deduped case-insensitively.
export function withAlwaysCc(message) {
  const address = alwaysCc()
  const present = [...toList(message.to), ...toList(message.cc)]

  if (present.some((a) => lower(a) === lower(address))) return message

  return { ...message, cc: [...toList(message.cc), address] }
}
