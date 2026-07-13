import { GEAR_TEETH } from './GearIcon.teeth'

/**
 * Settings gear glyph: a ring with eight teeth and a centre hole. Custom
 * SVG (not an emoji) so it always renders, inheriting the text colour.
 */
export function GearIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      aria-hidden="true">
      {GEAR_TEETH.map((angle) => (
        <rect key={angle} x="10.8" y="1" width="2.4" height="4.6" rx="0.6"
          fill="currentColor" stroke="none"
          transform={`rotate(${angle} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
