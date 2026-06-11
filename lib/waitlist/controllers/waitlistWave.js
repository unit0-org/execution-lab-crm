// Which wave of 6 a waitlist position lands in. The first wave only fills
// the seats left (capacity − already registered); later waves are full.
export function waitlistWave(position, remaining, capacity) {
  const first = remaining > 0 ? remaining : capacity

  if (position <= first) return 1

  return 1 + Math.ceil((position - first) / capacity)
}
