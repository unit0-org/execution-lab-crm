import { protectedResourceMetadata } from '@/lib/mcp/workosMetadata'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// MCP clients fetch this to discover the OAuth authorization server.
export function GET() {
  return Response.json(protectedResourceMetadata())
}
