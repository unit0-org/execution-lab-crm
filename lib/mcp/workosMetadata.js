import { mcpResourceUrl } from './mcpResource'

// OAuth protected-resource metadata: points MCP clients at the WorkOS
// AuthKit authorization server so they can do the login flow.
export function protectedResourceMetadata() {
  const domain = process.env.AUTHKIT_DOMAIN

  return {
    resource: mcpResourceUrl(),
    authorization_servers: domain ? [`https://${domain}`] : []
  }
}
