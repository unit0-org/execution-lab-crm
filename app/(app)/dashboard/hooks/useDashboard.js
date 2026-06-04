'use client'

import { useState, useEffect } from 'react'
import { dashboardSummaryAction } from '../actions/dashboardSummary'

const EMPTY = { stats: null, hotLeads: [], segments: [] }

export function useDashboard() {
  const [data, setData] = useState(EMPTY)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dashboardSummaryAction().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  return { ...data, loading }
}
