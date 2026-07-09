'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Modal } from '@/ui/organisms/Modal'
import { useToggle } from '@/ui/molecules/useToggle'
import { LabelFilterPanel } from './LabelFilterPanel'
import { LabelFilterTrigger } from './LabelFilterTrigger'
import { CategoryManager } from './CategoryManager'

// Filter to contacts by label (AND); also opens the manage-labels modal.
export function LabelFilter({ options, filter, cats }) {
  const pop = useToggle()
  const manage = useToggle()
  const stateOf = (id) => (filter.ids.has(id) ? 'on' : 'off')
  const trigger = (
    <LabelFilterTrigger count={filter.ids.size} onClick={pop.toggle} />
  )

  return (
    <>
      <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
        <LabelFilterPanel options={options} stateOf={stateOf}
          onToggle={filter.toggle} onManage={manage.show} />
      </Popover>
      <Modal open={manage.open} onClose={manage.hide} wide>
        <CategoryManager cats={cats} />
      </Modal>
    </>
  )
}
