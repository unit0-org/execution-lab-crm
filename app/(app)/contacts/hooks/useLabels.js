'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

const fetchLabels = (supabase) => supabase
  .from('tags')
  .select('id, name, color')
  .order('name')
  .then(({ data }) => data || [])

export function useLabels() {
  const [labels, setLabels] = useState([])
  const refresh = useCallback(() => {
    fetchLabels(createClient()).then(setLabels)
  }, [])
  useEffect(() => { refresh() }, [refresh])
  return { labels, refresh }
}
