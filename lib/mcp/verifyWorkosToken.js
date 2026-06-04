import { jwtVerify, createRemoteJWKSet } from 'jose'
import { mcpResourceUrl } from './mcpResource'

const domain = process.env.AUTHKIT_DOMAIN
const issuer = domain ? `https://${domain}` : undefined

const jwks = domain
  ? createRemoteJWKSet(new URL(`https://${domain}/oauth2/jwks`))
  : null

// Enforce the audience only after a WorkOS Resource Indicator is set —
// otherwise tokens carry a default aud and this check would 401.
const audience = process.env.MCP_VERIFY_AUDIENCE
  ? mcpResourceUrl()
  : undefined

// Validate a WorkOS AuthKit access token (the "Log in with Google"
// flow); returns MCP auth info or undefined. Inactive until
// AUTHKIT_DOMAIN is configured.
export async function verifyWorkosToken(token) {
  if (!jwks || !token) return undefined

  try {
    const { payload } = await jwtVerify(token, jwks, { issuer, audience })

    return { token, scopes: [], clientId: payload.sub }
  } catch {
    return undefined
  }
}
