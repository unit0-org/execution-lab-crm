'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { ToastList } from './ToastList'

const Ctx = createContext({ push: () => {} })

export const useToast = () => useContext(Ctx)

export function Toaster({ children }) {
  const [items, setItems] = useState([])

  const push = useCallback((item) => {
    const id = crypto.randomUUID()
    setItems((p) => [...p, { id, ...item }])
    setTimeout(() => setItems((p) => p.filter((i) => i.id !== id)), 3200)
  }, [])

  return (
    <Ctx.Provider value={{ push }}>
      {children}
      <ToastList items={items} />
    </Ctx.Provider>
  )
}
