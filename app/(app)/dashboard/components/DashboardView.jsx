'use client'

import { useDashboard } from '../hooks/useDashboard'
import { DashboardBody } from './DashboardBody'
import { DashboardSkeleton } from './DashboardSkeleton'

export function DashboardView() {
  const { stats, hotLeads, segments, loading } = useDashboard()

  if (loading) return <DashboardSkeleton />

  return (
    <DashboardBody stats={stats} hotLeads={hotLeads} segments={segments} />
  )
}
