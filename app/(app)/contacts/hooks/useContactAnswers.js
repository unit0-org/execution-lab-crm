'use client'

import { useState, useEffect } from 'react'
import { contactAnswersAction } from '../actions/contactAnswers'

export function useContactAnswers(contactId) {
  const [answers, setAnswers] = useState(undefined)

  useEffect(() => {
    contactAnswersAction(contactId).then(setAnswers)
  }, [contactId])

  return answers
}
