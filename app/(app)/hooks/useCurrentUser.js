'use client'

import { useState, useEffect } from 'react'
import { getCurrentUserAction } from '../actions/getCurrentUser'

export function useCurrentUser() {
  const [email, setEmail] = useState(null)

  useEffect(() => {
    getCurrentUserAction().then((user) => setEmail(user.email))
  }, [])

  return email
}
