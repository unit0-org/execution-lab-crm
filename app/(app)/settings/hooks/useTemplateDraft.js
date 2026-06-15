'use client'

import { useState } from 'react'

// Local draft of a template's editable fields so the preview updates live
// and Save can stay disabled until something actually changes. The editor
// remounts per template (keyed), so the initial values are the selected one.
export function useTemplateDraft(template) {
  const [subject, setSubject] = useState(template.subject)
  const [body, setBody] = useState(template.body)
  const onSubject = (e) => setSubject(e.target.value)
  const onBody = (e) => setBody(e.target.value)
  const changed = subject !== template.subject || body !== template.body

  return { subject, body, onSubject, onBody, changed }
}
