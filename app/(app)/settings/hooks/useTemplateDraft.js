'use client'

import { useState } from 'react'

// Local draft of a template's body so the preview updates live as the
// admin edits. The editor remounts per template (keyed), so the initial
// value is always the selected template's body.
export function useTemplateDraft(template) {
  const [body, setBody] = useState(template.body)
  const onChange = (e) => setBody(e.target.value)

  return { body, onChange }
}
