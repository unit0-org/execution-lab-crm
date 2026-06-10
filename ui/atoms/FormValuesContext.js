'use client'

import { createContext } from 'react'

// Holds the values from the most recent submit of the surrounding Form, so
// fields can repopulate after a failed submit. Null when outside a Form.
export const FormValuesContext = createContext(null)
