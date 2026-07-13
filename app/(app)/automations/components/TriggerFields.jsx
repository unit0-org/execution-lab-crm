import { Select } from '@/ui/atoms/Select'
import { wiredTriggers } from '@/lib/automation/catalog/triggers'
import { catalogOptions } from './toOptions'
import { CategoryFilter } from './CategoryFilter'

export function TriggerFields({ form, categories }) {
  return (
    <>
      <Select label="When" name="triggerType" defaultValue={form.trigger}
        onChange={form.onTrigger} options={catalogOptions(wiredTriggers())} />
      <CategoryFilter form={form} categories={categories} />
    </>
  )
}
