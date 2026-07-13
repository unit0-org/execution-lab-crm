import { syncBadgeStyle } from './SyncBadge.styles'

const LABEL = 'Google'

/**
 * Soft pill marking a contact as synced with Google; links out to Google
 * Contacts (new tab) when `href` is set, else renders as a plain chip.
 */
export function SyncBadge({ href }) {
  if (!href) return <span style={syncBadgeStyle}>{LABEL}</span>

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={syncBadgeStyle}>
      {LABEL}
    </a>
  )
}
