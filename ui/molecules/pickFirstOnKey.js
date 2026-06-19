const PICK_KEYS = ['Tab', 'Enter']

// Tab/Enter accepts the first suggestion while the dropdown is open.
export function pickFirstOnKey(e, matches, pick) {
  if (!matches.length || !PICK_KEYS.includes(e.key)) return

  e.preventDefault()
  pick(matches[0])
}
