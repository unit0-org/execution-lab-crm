import { createMcpHandler } from 'mcp-handler'
import { registerTools } from './registerTools'

// Our MCP handler: registers the read-only CRM tools and serves them
// over streamable HTTP (SSE disabled, so no Redis is required).
export const mcpHandler = createMcpHandler(
  (server) => registerTools(server),
  { serverInfo: { name: 'execution-lab-crm', version: '0.1.0' } },
  { disableSse: true }
)
