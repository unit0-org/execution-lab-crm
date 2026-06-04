'use client'

import { useState, useEffect } from 'react'
import { listCategoriesAction } from '../actions/listCategories'
import { createCategoryAction } from '../actions/createCategory'
import { setCategoryLeadsAction } from '../actions/setCategoryLeads'

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    listCategoriesAction().then(setCategories)
  }, [tick])

  const create = (name) => createCategoryAction(name).then(reload)
  const toggle = (id, on) => setCategoryLeadsAction(id, on).then(reload)

  return { categories, create, toggle }
}
