import { consentParams } from './consentParams'

const AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth'

// The Google consent URL to start the connect flow.
export function consentUrl(origin) {
  return `${AUTH_URL}?${consentParams(origin)}`
}
