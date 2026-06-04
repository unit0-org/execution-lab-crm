// The canonical MCP resource URL: the audience AuthKit binds tokens to
// (its Resource Indicator) and the resource advertised in OAuth metadata.
export function mcpResourceUrl() {
  return `${process.env.NEXT_PUBLIC_SITE_URL}/api/mcp`
}
