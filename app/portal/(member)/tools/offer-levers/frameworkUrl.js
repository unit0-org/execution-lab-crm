import { siteOrigin } from '@/lib/portal/siteOrigin'

// The public Offer Levers guide the generated prompt tells the model to
// read first (its AI has no knowledge of our framework).
export function frameworkUrl() {
  return `${siteOrigin()}/offer-levers`
}
