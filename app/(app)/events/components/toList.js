// A comma-separated URL param as a list; absent or empty means no values,
// which every filter reads as "don't narrow on this".
export const toList = (raw) => (raw ? raw.split(',').filter(Boolean) : [])
