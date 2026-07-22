'use client'

import { Button } from '@/ui/atoms/Button'

export function ApplyFixesBar({ count, onApply }) {
  return (
    <Button size="sm" tone="primary" disabled={!count} onClick={onApply}>
      Apply selected ({count})
    </Button>
  )
}
