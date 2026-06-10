// The sentinel value that reveals the free-text "please specify" box.
export const OTHER = 'Other'

// Choices for "How did you hear about us?"; a blank placeholder keeps the
// field empty until a real selection, so `required` can enforce it.
export const REFERRAL_OPTIONS = [
  { value: '', label: 'Select one…' },
  'Google search',
  'Social media',
  'Friend or colleague',
  'Newsletter',
  'Event or workshop',
  OTHER
]
