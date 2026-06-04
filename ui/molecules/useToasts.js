'use client'

import { useState, useEffect } from 'react'
import { subscribeToasts } from './toastBus'

export function useToasts() {
  const [toasts, setToasts] = useState([])

  useEffect(() => subscribeToasts((toast) => {
    setToasts((all) => [...all, toast])
    setTimeout(() => {
      setToasts((all) => all.filter((t) => t.id !== toast.id))
    }, 2500)
  }), [])

  return { toasts }
}
