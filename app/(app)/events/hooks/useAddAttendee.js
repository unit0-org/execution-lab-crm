'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { useFormAction } from './useFormAction'
import { addAttendeeAction } from '../actions/addAttendee'

const EMPTY = { contactId: null, name: '', email: '' }

export function useAddAttendee(onChanged, onClose) {
  const [contact, setContact] = useState(EMPTY)
  const done = () => {
    setContact(EMPTY)
    onClose()
    onChanged()
    showToast('Attendee added')
  }
  const { action } = useFormAction(addAttendeeAction, done)

  return { contact, setContact, action }
}
