'use client'

import { useState, useEffect, useRef } from 'react'
import { listTasksAction } from '../actions/listTasks'
import { toggleTaskAction } from '../actions/toggleTask'

// Seeded with server-loaded tasks; refetches on reload or after a toggle.
export function useContactTasks(contactId, initial) {
  const [tasks, setTasks] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listTasksAction(contactId).then(setTasks)
  }, [contactId, tick])

  const reload = () => setTick((n) => n + 1)
  const toggle = (id, done) => toggleTaskAction(id, done).then(reload)

  return { tasks, reload, toggle }
}
