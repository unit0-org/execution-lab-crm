// Parse the Google service-account credentials from the environment.
export function serviceAccount() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON is not set')

  return JSON.parse(raw)
}
