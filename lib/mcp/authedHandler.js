import { withMcpAuth } from 'mcp-handler'
import { mcpHandler } from './createHandler'
import { verifyToken } from './verifyToken'

// The MCP handler gated by bearer-token auth: 401 without a valid
// MCP_TOKEN. The /api/mcp route serves this as both GET and POST.
export const authedHandler = withMcpAuth(mcpHandler, verifyToken, {
  required: true
})
