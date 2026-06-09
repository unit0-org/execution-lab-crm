import { syncBadgeStyle } from './SyncBadge.styles'

const LABEL = 'Google'

// A soft pill marking a contact as synced with Google. With an `href`
// it links out (new tab) to the Google Contacts person; without one it
// renders as a plain chip.
export function SyncBadge({ href }) {
  if (!href) return <span style={syncBadgeStyle}>{LABEL}</span>

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={syncBadgeStyle}>
      {LABEL}
    </a>
  )
}
