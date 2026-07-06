import { portalUrl } from '@/lib/portal/portalUrl'

// The public Offer Levers guide the generated prompt tells the model to
// read first (its AI has no knowledge of our framework). Lives on the
// portal origin (portalUrl → portal subdomain, or /portal on the CRM host).
export function frameworkUrl() {
  return portalUrl('/offer-levers')
}
