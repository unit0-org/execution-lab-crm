'use client'

import { useState, useEffect } from 'react'
import { getInvoiceSettingAction } from '../actions/getInvoiceSetting'

export function useInvoiceSetting() {
  const [setting, setSetting] = useState(undefined)

  useEffect(() => {
    getInvoiceSettingAction().then(setSetting)
  }, [])

  return setting
}
