// True when the request carries the expected cron bearer secret.
export function authorizeCron(request) {
  const header = request.headers.get('authorization')

  return header === `Bearer ${process.env.CRON_SECRET}`
}
