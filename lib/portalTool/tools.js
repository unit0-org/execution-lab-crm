// The catalog of member-portal tools. Each tool is implemented in code at
// `path` under app/portal/(member)/tools; a portal_tool_access row grants a
// member access to its `key`. Add a tool here and build its page.
export const PORTAL_TOOLS = [
  {
    key: 'offer-levers',
    name: 'Offer generator',
    blurb: 'Generate multiple offers from a single seed, using the '
      + 'Offer Levers.',
    icon: 'grid',
    path: '/tools/offer-levers'
  }
]

export function findPortalTool(key) {
  return PORTAL_TOOLS.find((tool) => tool.key === key) || null
}

export function isPortalToolKey(key) {
  return PORTAL_TOOLS.some((tool) => tool.key === key)
}
