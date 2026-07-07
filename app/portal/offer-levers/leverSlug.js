// A lever id as its URL slug: deliveryModel -> delivery-model. Shared by the
// per-lever pages and the configurator's "Learn more" tooltip link.
export function leverSlug(id) {
  return id.replace(/([A-Z])/g, '-$1').toLowerCase()
}
