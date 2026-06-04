// Authorize an MCP request by matching its bearer token against the
// MCP_TOKEN secret; returns auth info when valid, else undefined.
export function verifyToken(req, bearerToken) {
  const secret = process.env.MCP_TOKEN

  if (!secret || bearerToken !== secret) return undefined

  return { token: bearerToken, scopes: [], clientId: 'crm-mcp' }
}
