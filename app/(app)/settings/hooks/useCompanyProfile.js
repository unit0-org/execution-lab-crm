'use client'

import { useState, useEffect } from 'react'
import { getCompanyProfileAction } from '../actions/getCompanyProfile'

export function useCompanyProfile() {
  const [profile, setProfile] = useState(undefined)

  useEffect(() => {
    getCompanyProfileAction().then(setProfile)
  }, [])

  return profile
}
