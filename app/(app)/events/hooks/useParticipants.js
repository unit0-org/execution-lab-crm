'use client'

import { useState, useEffect, useRef } from 'react'
import { listParticipantsAction } from '../actions/listParticipants'

// The loaded participations, reloaded in place after a removal so the
// list reflects what is left without a full navigation. Reloads with the
// filter the page is on, so removing never drops it back to everything.
export function useParticipants(initial, picked) {
  const { statuses, events } = picked
  const [participants, setParticipants] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listParticipantsAction(statuses, events).then(setParticipants)
  }, [tick, statuses, events])

  return { participants, reload: () => setTick((n) => n + 1) }
}
