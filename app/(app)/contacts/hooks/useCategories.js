'use client'

import { useState, useEffect } from 'react'
import { listCategoriesAction } from '../actions/listCategories'
import { createCategoryAction } from '../actions/createCategory'
import { setCategoryLeadsAction } from '../actions/setCategoryLeads'
import { deleteCategoryAction } from '../actions/deleteCategory'

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

  const create = (name) => createCategoryAction(name).then(reload)
  const toggle = (id, on) => setCategoryLeadsAction(id, on).then(reload)
  const remove = (id) => deleteCategoryAction(id).then(reload)

  return { categories, create, toggle, remove }
}
