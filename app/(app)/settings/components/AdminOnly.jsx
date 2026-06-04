'use client'

import { Text } from '@/ui/atoms/Text'
import { useMembership } from '../../hooks/useMembership'

// Renders children only for org admins; everyone else sees a notice.
export function AdminOnly({ children }) {
  const membership = useMembership()

  if (membership && membership.role !== 'admin') {
    return <Text>Admins only.</Text>
  }

  return children
}
