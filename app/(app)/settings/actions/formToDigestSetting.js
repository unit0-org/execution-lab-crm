const clampHour = (value) => Math.min(23, Math.max(0, Number(value) || 0))

// Collect the digest-settings form fields into a plain object.
export function formToDigestSetting(formData) {
  return { send_hour: clampHour(formData.get('send_hour')) }
}
