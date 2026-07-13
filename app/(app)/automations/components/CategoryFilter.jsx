import { Select } from '@/ui/atoms/Select'
import { categoryOptions } from './toOptions'

// The category picker only applies to the "category added" trigger.
export function CategoryFilter({ form, categories }) {
  if (form.trigger !== 'category_added') return null

  return (
    <Select label="Category" name="categoryId"
      options={categoryOptions(categories)} />
  )
}
