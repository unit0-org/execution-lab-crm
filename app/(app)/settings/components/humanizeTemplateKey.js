// 'registration_confirmation' -> 'Registration confirmation'
export function humanizeTemplateKey(key) {
  const words = (key || '').replace(/_/g, ' ').trim()

  return words.charAt(0).toUpperCase() + words.slice(1)
}
