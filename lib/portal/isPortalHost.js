// Whether a request host targets the public portal subdomain.
export function isPortalHost(host) {
  return Boolean(host) && host.startsWith('portal.')
}
