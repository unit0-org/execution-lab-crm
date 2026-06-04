import { withMcpAuth } from 'mcp-handler'
import { mcpHandler } from './createHandler'
import { verifyToken } from './verifyToken'

// The MCP handler gated by auth (static MCP_TOKEN or a WorkOS token).
// A 401 advertises the OAuth metadata so clients can discover AuthKit.
export const authedHandler = withMcpAuth(mcpHandler, verifyToken, {
  required: true,
  resourceMetadataPath: '/.well-known/oauth-protected-resource'
})
