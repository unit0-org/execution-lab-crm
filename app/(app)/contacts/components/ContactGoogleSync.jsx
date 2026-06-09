'use client'

import { SyncBadge } from '@/ui/atoms/SyncBadge'
import { useContactGoogleLink } from '../hooks/useContactGoogleLink'
import { googleContactUrl } from './googleContactUrl'

// Shows a "Google" sync badge linking to the contact's Google person
// when the contact is linked; renders nothing otherwise.
export function ContactGoogleSync({ contactId }) {
  const link = useContactGoogleLink(contactId)

  if (!link) return null

  return <SyncBadge href={googleContactUrl(link.resourceName)} />
}
