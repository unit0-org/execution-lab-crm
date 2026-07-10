'use client'

import { useState } from 'react'

// Holds the picked file + busy state for the upload dialog; runs the
// upload and reports back so the modal can close.
export function useFileForm(onUpload, onSaved) {
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)

  const pick = (e) => setFile(e.target.files[0])
  const submit = () => {
    setBusy(true)
    onUpload(file).then(onSaved)
  }

  return { file, busy, pick, submit }
}
