'use client'

import { PageHeader } from '@/ui/organisms/PageHeader'
import { Heading } from '@/ui/atoms/Heading'
import { Button } from '@/ui/atoms/Button'
import { useToggle } from '@/ui/molecules/useToggle'
import { EditCompanyModal } from './EditCompanyModal'

export function CompanyHeader({ company, onChanged }) {
  const edit = useToggle()

  const saved = () => {
    edit.hide()
    onChanged()
  }

  return (
    <PageHeader title={<Heading gutter="none">{company.name}</Heading>}
      actions={
        <>
          <Button size="sm" onClick={edit.show}>Edit</Button>
          <EditCompanyModal open={edit.open} company={company}
            onSaved={saved} onClose={edit.hide} />
        </>
      } />
  )
}
