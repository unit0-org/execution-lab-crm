'use client'

import { PurchasesTable } from './PurchasesTable'
import { PurchasesSkeleton } from './PurchasesSkeleton'

export function PurchasesList({ loading, purchases }) {
  if (loading) return <PurchasesSkeleton />

  return <PurchasesTable purchases={purchases} />
}
