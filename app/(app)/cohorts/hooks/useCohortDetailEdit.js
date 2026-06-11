'use client'

import { useRouter } from 'next/navigation'
import { useCohortModal } from './useCohortModal'

// Edit-modal state for the cohort detail page; refresh the server-rendered
// data after a save so the new values show without a manual reload.
export function useCohortDetailEdit() {
  const router = useRouter()
  const modal = useCohortModal()
  const onSaved = () => { modal.close(); router.refresh() }

  return { ...modal, onSaved }
}
