import { Narrow } from '@/ui/layout/Narrow'
import { Stack } from '@/ui/layout/Stack'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { CongratsCard } from './CongratsCard'
import { ConfirmNext } from './ConfirmNext'

// On-screen confirmation after a successful payment (Story 2.4).
export function Confirmation({ name, email, start }) {
  return (
    <Narrow max={720}>
      <Stack gap="lg">
        <CongratsCard name={name} email={email} start={start} />
        <ConfirmNext />
        <ButtonLink href="/" tone="primary">Back to cohorts</ButtonLink>
      </Stack>
    </Narrow>
  )
}
