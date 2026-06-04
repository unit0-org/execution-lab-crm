import { verifyWorkosToken } from './verifyWorkosToken'

// Authorize an MCP request: the static MCP_TOKEN (for CLI clients like
// Claude Code) or a WorkOS access token (the "Log in with Google" flow).
export function verifyToken(req, bearerToken) {
  const secret = process.env.MCP_TOKEN

  if (secret && bearerToken === secret) {
    return { token: bearerToken, scopes: [], clientId: 'crm-mcp' }
  }

  return verifyWorkosToken(bearerToken)
}
