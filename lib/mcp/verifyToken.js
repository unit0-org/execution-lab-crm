import { verifyWorkosToken } from './verifyWorkosToken'

// Authorize an MCP request: the static MCP_TOKEN (for CLI clients like
// Claude Code) or a WorkOS access token (the "Log in with Google" flow).
export function verifyToken(req, bearerToken) {
  const secret = process.env.MCP_TOKEN

  // The static token identifies a client, not a person. MCP_AUTHOR_EMAIL
  // names the team member whose integration it is, so its writes can still
  // be attributed; without it they stay unattributed.
  if (secret && bearerToken === secret) {
    return {
      token: bearerToken, scopes: [], clientId: 'crm-mcp',
      extra: { email: process.env.MCP_AUTHOR_EMAIL }
    }
  }

  return verifyWorkosToken(bearerToken)
}
