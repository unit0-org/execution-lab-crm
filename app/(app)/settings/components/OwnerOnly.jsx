'use client'

import { Forbidden } from '../../components/Forbidden'
import { usePlatformOwner } from '../hooks/usePlatformOwner'

// Renders children only for the platform owner; a 403 for anyone else.
export function OwnerOnly({ children }) {
  const isOwner = usePlatformOwner()

  if (isOwner === undefined) return null

  if (!isOwner) return <Forbidden message="Platform owner only." />

  return children
}
