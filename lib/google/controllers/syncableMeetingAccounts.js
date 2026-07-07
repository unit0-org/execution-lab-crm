// The meeting sync's connected accounts — every account holding a refresh
// token. Kept as a named alias over the shared helper so meeting callers
// read intent-first.
export { syncableGoogleAccounts as syncableMeetingAccounts }
  from './syncableGoogleAccounts'
