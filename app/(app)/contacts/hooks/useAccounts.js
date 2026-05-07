'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

const fetchAccounts = (supabase) => supabase
  .from('google_accounts')
  .select('id, email, label, last_synced_at')
  .order('email')
  .then(({ data }) => data || [])

export function useAccounts() {
  const [accounts, setAccounts] = useState([])
  const refresh = useCallback(() => {
    fetchAccounts(createClient()).then(setAccounts)
  }, [])
  useEffect(() => { refresh() }, [refresh])
  return { accounts, refresh }
}
