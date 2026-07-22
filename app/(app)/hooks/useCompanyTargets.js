'use client'

import { useState, useEffect } from 'react'
import { listCompaniesAction } from '../companies/actions/listCompanies'
import { toCompanyTarget } from './toCompanyTarget'

// Loads companies once for the command palette's search targets.
export function useCompanyTargets() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    listCompaniesAction()
      .then((rows) => setCompanies(rows.map(toCompanyTarget)))
  }, [])

  return companies
}
