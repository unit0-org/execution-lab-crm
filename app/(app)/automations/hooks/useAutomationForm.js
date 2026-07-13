'use client'

import { useState } from 'react'

// Tracks the selected trigger/action so the builder can show the matching
// config fields. The values still submit via the form's named inputs.
export function useAutomationForm() {
  const [trigger, setTrigger] = useState('contact_created')
  const [action, setAction] = useState('send_email')
  const onTrigger = (e) => setTrigger(e.target.value)
  const onAction = (e) => setAction(e.target.value)

  return { trigger, action, onTrigger, onAction }
}
