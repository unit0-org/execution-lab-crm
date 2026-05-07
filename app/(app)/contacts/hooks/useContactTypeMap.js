'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

async function fetchMap(supabase) {
  const { data } = await supabase.from('contact_type_assignments').select('contact_id, type_id')
  const map = {}
  for (const r of data || []) (map[r.contact_id] ||= []).push(r.type_id)

  return map
}

export function useContactTypeMap() {
  const [map, setMap] = useState({})
  const refresh = useCallback(() => {
    fetchMap(createClient()).then(setMap)
  }, [])
  useEffect(() => { refresh() }, [refresh])

  return { map, refresh }
}
