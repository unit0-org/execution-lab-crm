// The contact's real photo URL, or null when Google only has the
// generated default avatar (photos[0].default === true).
export function mapPhotoUrl(photos) {
  const photo = photos?.[0]

  if (!photo || photo.default === true) return null

  return photo.url || null
}
