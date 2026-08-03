'use client'

import { ReservePersonForm } from './ReservePersonForm'
import { ReserveEmailReview } from './ReserveEmailReview'

// Which half of the reservation is on screen: name the person, then read
// and edit the email that reserves them.
export function ReserveStep({ flow, contacts, onCancel }) {
  if (!flow.draft) {
    return <ReservePersonForm contacts={contacts} onCancel={onCancel}
      onContinue={flow.preview} />
  }

  return <ReserveEmailReview flow={flow} />
}
