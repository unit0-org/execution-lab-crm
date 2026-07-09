'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Modal } from '@/ui/organisms/Modal'
import { useToggle } from '@/ui/molecules/useToggle'
import { useLabelMenu } from '../hooks/useLabelMenu'
import { LabelTrigger } from './LabelTrigger'
import { LabelMenuPanel } from './LabelMenuPanel'
import { CategoryManager } from './CategoryManager'

// Gmail "Label as" menu, reused for one contact or a bulk selection.
// `stateOf(id)` returns 'on' | 'off' | 'mixed'; `onToggle(id)` flips it.
export function LabelMenu({ cats, stateOf, onToggle, label }) {
  const pop = useToggle()
  const manage = useToggle()
  const menu = useLabelMenu(cats.categories, cats.create)
  const trigger = <LabelTrigger label={label} onClick={pop.toggle} />

  return (
    <>
      <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
        <LabelMenuPanel menu={menu} stateOf={stateOf} onToggle={onToggle}
          onManage={manage.show} />
      </Popover>
      <Modal open={manage.open} onClose={manage.hide} wide>
        <CategoryManager cats={cats} />
      </Modal>
    </>
  )
}
