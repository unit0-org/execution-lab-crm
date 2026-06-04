// OAuth protected-resource metadata: points MCP clients at the WorkOS
// AuthKit authorization server so they can do the login flow.
export function protectedResourceMetadata() {
  const domain = process.env.AUTHKIT_DOMAIN
  const site = process.env.NEXT_PUBLIC_SITE_URL

  return {
    resource: `${site}/api/mcp`,
    authorization_servers: domain ? [`https://${domain}`] : []
  }
}
