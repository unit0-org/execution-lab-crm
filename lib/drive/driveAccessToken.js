import { JWT } from 'google-auth-library'
import { serviceAccount } from './serviceAccount'

const DEFAULT_SCOPE = 'https://www.googleapis.com/auth/drive.file'

// A short-lived Drive access token for a service account (creds JSON). The
// default scope only reaches files the service account created; pass the
// broad `drive` scope to read/move user-owned files in shared folders.
export async function driveAccessToken(raw, scope = DEFAULT_SCOPE) {
  const creds = serviceAccount(raw)
  const client = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: [scope]
  })
  const { access_token } = await client.authorize()

  return access_token
}
