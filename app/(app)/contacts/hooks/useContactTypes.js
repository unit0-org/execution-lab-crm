'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

const fetchTypes = (supabase) => supabase
  .from('contact_types')
  .select('id, name, color')
  .order('name')
  .then(({ data }) => data || [])

export function useContactTypes() {
  const [types, setTypes] = useState([])
  const refresh = useCallback(() => {
    fetchTypes(createClient()).then(setTypes)
  }, [])
  useEffect(() => { refresh() }, [refresh])

  return { types, refresh }
}
