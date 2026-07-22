// Phones are matched by their digits alone, so different formatting of the
// same number still collides as a duplicate. Detection key only.
export function normalizePhone(phone) {
  return phone ? phone.replace(/\D/g, '') : ''
}
