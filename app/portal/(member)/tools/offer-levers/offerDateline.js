const OPTS = {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
}

const fmt = (value) => new Date(value).toLocaleDateString('en-US', OPTS)

const wasEdited = (offer) =>
  offer.updated_at
  && new Date(offer.updated_at) - new Date(offer.created_at) > 1000

// "Created <date>", plus "· Updated <date>" once it's been edited since.
export function offerDateline(offer) {
  const created = 'Created ' + fmt(offer.created_at)

  if (!wasEdited(offer)) return created

  return created + '   ·   Updated ' + fmt(offer.updated_at)
}
