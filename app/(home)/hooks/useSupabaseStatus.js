'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { probeSupabase } from '@/lib/supabase/probe'

const DEFAULT = { ok: null, detail: 'checking…' }

export function useSupabaseStatus() {
  const [status, setStatus] = useState(DEFAULT)
  useEffect(() => {
    probeSupabase(createClient()).then(setStatus)
  }, [])

  return status
}
