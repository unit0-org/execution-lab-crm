import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { StateTag } from '@/ui/molecules/StateTag'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { CohortCta } from './CohortCta'
import { CohortScarcity } from './CohortScarcity'
import { RegistrationWindow } from './RegistrationWindow'
import { rosterCardView } from './rosterCardView'

// A roster cohort card: month, status, dates, price, seats, action.
export function RosterCard({ card }) {
  const v = rosterCardView(card)

  return (
    <Card>
      <Stack gap="sm">
        <Heading level={2} gutter="none">{v.month}</Heading>
        <StateTag state={v.action.state} label={v.action.tag} size={10} />
        <MonoLabel size={11}>{v.start}</MonoLabel>
        <RegistrationWindow card={card} size={11} />
        <PriceTag price={v.price} regular={v.regular} size={20} />
        <CohortScarcity card={card} tone={v.tone} size={11} />
        <CohortCta action={v.action} block outline />
      </Stack>
    </Card>
  )
}
