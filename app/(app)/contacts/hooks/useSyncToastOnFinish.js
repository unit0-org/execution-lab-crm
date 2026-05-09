'use client'

import { useEffect, useRef } from 'react'
import { useToast } from '@/ui/Toaster'

// Watches a polled progress row; when its status transitions away from
// 'running', pushes a one-shot toast and triggers caller mutation.
export function useSyncToastOnFinish(progress, onMutate) {
  const toast = useToast()
  const last = useRef(null)

  useEffect(() => {
    if (!progress) return
    const prev = last.current
    last.current = progress.sync_status
    if (prev !== 'running') return
    if (progress.sync_status === 'done')  toast.push({ tone: 'success', message: 'Account synced' })
    if (progress.sync_status === 'error') toast.push({ tone: 'error', message: progress.sync_error || 'Sync failed' })
    onMutate?.()
  }, [progress?.sync_status, progress?.sync_error]) // eslint-disable-line react-hooks/exhaustive-deps
}
