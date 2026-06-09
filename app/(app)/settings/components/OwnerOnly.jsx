'use client'

import { Text } from '@/ui/atoms/Text'
import { usePlatformOwner } from '../hooks/usePlatformOwner'

// Renders children only for the platform owner; nothing while loading.
export function OwnerOnly({ children }) {
  const isOwner = usePlatformOwner()

  if (isOwner === undefined) return null

  if (!isOwner) return <Text>Owner only.</Text>

  return children
}
