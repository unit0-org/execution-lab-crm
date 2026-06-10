'use client'

import { useState, useEffect } from 'react'
import { listEmailTemplatesAction } from '../actions/listEmailTemplates'

export function useEmailTemplates() {
  const [templates, setTemplates] = useState(undefined)
  const [nonce, setNonce] = useState(0)
  const reload = () => setNonce((n) => n + 1)

  useEffect(() => {
    listEmailTemplatesAction().then(setTemplates)
  }, [nonce])

  return { templates, reload }
}
