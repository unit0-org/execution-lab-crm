'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'

const fetchContacts = (supabase) => supabase
  .from('contacts')
  .select('id, display_name, google_account_id, contact_emails(email, is_primary)')
  .order('display_name', { ascending: true, nullsFirst: false })
  .limit(500)
  .then(({ data }) => data || [])

export function useContacts() {
  const [contacts, setContacts] = useState([])
  const refresh = useCallback(() => {
    fetchContacts(createClient()).then(setContacts)
  }, [])
  useEffect(() => { refresh() }, [refresh])

  return { contacts, refresh }
}
