'use client'

import { SidebarLayout } from '@/ui/layout/SidebarLayout'
import { Stack } from '@/ui/layout/Stack'
import { WaitlistHeader } from './WaitlistHeader'
import { WaitlistForm } from './WaitlistForm'
import { WaitlistExplainer } from './WaitlistExplainer'
import { WaitlistThanks } from './WaitlistThanks'
import { useWaitlistJoin } from '../hooks/useWaitlistJoin'

// The public join screen: form + explainer, swapping to the confirmation
// (full width) on success.
export function WaitlistJoin({ cohorts, selected, pricing }) {
  const { action, error, joined, result } = useWaitlistJoin()

  if (joined) return <WaitlistThanks result={result} />

  return (
    <SidebarLayout
      main={
        <Stack gap="md">
          <WaitlistHeader pricing={pricing} />
          <WaitlistForm action={action} error={error}
            cohorts={cohorts} selected={selected} />
        </Stack>
      }
      aside={<WaitlistExplainer />} />
  )
}
