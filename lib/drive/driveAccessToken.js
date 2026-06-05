import { JWT } from 'google-auth-library'
import { serviceAccount } from './serviceAccount'

const SCOPE = 'https://www.googleapis.com/auth/drive.file'

// A short-lived Drive access token for the service account.
export async function driveAccessToken() {
  const creds = serviceAccount()
  const client = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: [SCOPE]
  })
  const { access_token } = await client.authorize()

  return access_token
}
