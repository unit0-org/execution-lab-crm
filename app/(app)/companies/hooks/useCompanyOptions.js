'use client'

import { useState, useEffect } from 'react'
import { listCompaniesAction } from '../actions/listCompanies'
import { toCompanyOptions } from './toCompanyOptions'

export function useCompanyOptions() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    listCompaniesAction().then(setCompanies)
  }, [])

  return toCompanyOptions(companies)
}
