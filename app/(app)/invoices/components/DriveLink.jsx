'use client'

import { Button } from '@/ui/atoms/Button'

// A button to open the uploaded file in Drive; nothing when not uploaded.
export function DriveLink({ url }) {
  if (!url) return null

  const open = () => window.open(url, '_blank')

  return <Button size="sm" onClick={open}>Open in Drive</Button>
}
