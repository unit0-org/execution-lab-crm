// Returns true if the request carries the configured CRON_SECRET.
// Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}` automatically.
export function isAuthorizedCron(request) {
  const expected = process.env.CRON_SECRET
  if (!expected) return false
  const got = request.headers.get('authorization')

  return got === `Bearer ${expected}`
}
