'use client'

import { useState, useEffect, useRef } from 'react'
import { listContactFilesAction } from '../actions/listContactFiles'
import { deleteContactFileAction } from '../actions/deleteContactFile'
import { uploadContactFile } from './uploadContactFile'

// Seeded with server-loaded files; refetches after an upload or delete.
export function useContactFiles(contactId, initial) {
  const [files, setFiles] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listContactFilesAction(contactId).then(setFiles)
  }, [contactId, tick])

  const reload = () => setTick((n) => n + 1)
  const upload = (file) => uploadContactFile(contactId, file).then(reload)
  const remove = (id) => deleteContactFileAction(id).then(reload)

  return { files, upload, remove }
}
