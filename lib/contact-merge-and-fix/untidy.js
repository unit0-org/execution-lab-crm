import { normalizeText } from './normalizeText'

// A non-empty value that differs from its whitespace-normalized form —
// i.e. it carries stray leading, trailing, or doubled whitespace to tidy.
export function isUntidy(value) {
  return Boolean(value) && value !== normalizeText(value)
}
