// The portal's own public origin when it runs on its own subdomain
// (e.g. https://portal.theexecutionlab.ca). Null means it is still served
// under a /portal path on the CRM origin.
export function portalOrigin() {
  return process.env.NEXT_PUBLIC_PORTAL_URL || null
}
