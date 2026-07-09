'use client'

import { useSyncExternalStore } from 'react'
import { readPref, DEFAULTS } from '@/app/portal/hooks/portalThemePrefs'
import { subscribeThemeChange } from '@/app/portal/hooks/portalThemeBus'
import { setPortalMode, setPortalDarkAt, setPortalDayAt }
  from '@/app/portal/hooks/portalThemeControls'

const usePref = (name) =>
  useSyncExternalStore(subscribeThemeChange,
    () => readPref(name), () => DEFAULTS[name])

const onValue = (set) => (event) => set(event.target.value)

// The portal appearance state: the saved mode and switch times, plus
// handlers that persist a change and re-derive the theme at once.
export function usePortalTheme() {
  return {
    mode: usePref('mode'),
    darkAt: usePref('darkAt'),
    dayAt: usePref('dayAt'),
    onModeChange: onValue(setPortalMode),
    onDarkAtChange: onValue(setPortalDarkAt),
    onDayAtChange: onValue(setPortalDayAt)
  }
}
