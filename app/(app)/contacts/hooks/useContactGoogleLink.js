'use client'

import { useState, useEffect } from 'react'
import { contactGoogleLinkAction }
  from '../actions/contactGoogleLink'

export function useContactGoogleLink(contactId) {
  const [link, setLink] = useState(null)

  useEffect(() => {
    contactGoogleLinkAction(contactId).then(setLink)
  }, [contactId])

  return link
}
