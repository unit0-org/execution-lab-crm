'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { addCompanyContactAction } from '../actions/addCompanyContact'

const emptyContact = { contactId: null, name: '', email: '' }

export function useAddCompanyContact(companyId, onSaved) {
  const [contact, setContact] = useState(emptyContact)
  const [role, setRole] = useState('employee')
  const add = useActionHandler(addCompanyContactAction, { onDone: onSaved })

  const submit = () => {
    if (!contact.contactId) return showToast('Pick a contact first')

    return add({ companyId, contactId: contact.contactId, role })
  }

  return { contact, setContact, role, setRole, submit }
}
