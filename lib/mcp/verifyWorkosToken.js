import { jwtVerify, createRemoteJWKSet } from 'jose'

const domain = process.env.AUTHKIT_DOMAIN

const jwks = domain
  ? createRemoteJWKSet(new URL(`https://${domain}/oauth2/jwks`))
  : null

// Validate a WorkOS AuthKit access token (the "Log in with Google"
// flow); returns MCP auth info or undefined. Inactive until
// AUTHKIT_DOMAIN is configured.
export async function verifyWorkosToken(token) {
  if (!jwks || !token) return undefined

  try {
    const { payload } = await jwtVerify(token, jwks)

    return { token, scopes: [], clientId: payload.sub }
  } catch {
    return undefined
  }
}
