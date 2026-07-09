// Pure portal auto-theme schedule: given the clock as minutes-since-midnight
// and the two switch boundaries, decide light or dark. The dark window wraps
// past midnight when its start is later than the light start (the usual case:
// dark 18:00, light 06:00). The inline pre-paint script mirrors this logic.
export function minutesOf(time) {
  const [hour, minute] = time.split(':').map(Number)

  return hour * 60 + minute
}

export function scheduledTheme(nowMinutes, darkAt, dayAt) {
  const wraps = darkAt > dayAt
  const inDark = wraps
    ? nowMinutes >= darkAt || nowMinutes < dayAt
    : nowMinutes >= darkAt && nowMinutes < dayAt

  return inDark ? 'dark' : 'light'
}
