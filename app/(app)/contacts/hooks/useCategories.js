'use client'

import { useState, useEffect } from 'react'
import { listCategoriesAction } from '../actions/listCategories'
import { categoryMutators } from './categoryMutators'

// The category list plus mutators. `onChange` (optional) fires after a
// mutation so an owner can refresh dependent data (e.g. the contact).
export function useCategories(onChange) {
  const [categories, setCategories] = useState([])
  const [tick, setTick] = useState(0)

  const reload = () => {
    setTick((n) => n + 1)

    if (onChange) onChange()
  }

  useEffect(() => {
    listCategoriesAction().then(setCategories)
  }, [tick])

  return { categories, ...categoryMutators(reload) }
}
