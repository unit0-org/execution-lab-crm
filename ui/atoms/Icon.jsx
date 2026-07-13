import { paths } from './Icon.paths'

/**
 * SVG icon by name — see `Icon.paths.js` (`plus`, `trash`, …). A line
 * icon sized in px, inheriting the current text colour.
 */
export function Icon({ name, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
