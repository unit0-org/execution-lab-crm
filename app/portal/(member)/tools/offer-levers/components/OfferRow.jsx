'use client'

import { useState } from 'react'
import { Card } from '@/ui/atoms/Card'
import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { OfferRowActions } from './OfferRowActions'

// One offer: an inline-editable name (renames on blur) + trailing actions.
export function OfferRow({ offer, onRename, onRemove }) {
  const [name, setName] = useState(offer.name)

  return (
    <Card>
      <GrowRow align="center">
        <TextField value={name} onChange={(e) => setName(e.target.value)}
          onBlur={() => onRename(offer.id, name)} />
        <OfferRowActions offer={offer} onRemove={onRemove} />
      </GrowRow>
    </Card>
  )
}
