// Add each numeric field of `src` into `target` (mutates and returns it).
export function sumCounts(target, src) {
  for (const key of Object.keys(src || {})) {
    target[key] = (target[key] || 0) + src[key]
  }

  return target
}
