'use client'

import { useState } from 'react'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { addRelationshipAction } from '../actions/addRelationship'

const emptyContact = { contactId: null, name: '', email: '' }
const emptyRel = { typeId: null, label: '' }

export function useRelationshipForm(onSaved) {
  const [contact, setContact] = useState(emptyContact)
  const [rel, setRel] = useState(emptyRel)
  const { action, error } = useFormAction(addRelationshipAction, onSaved)

  return { contact, setContact, rel, setRel, action, error }
}
