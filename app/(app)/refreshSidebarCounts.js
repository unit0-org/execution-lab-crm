import { revalidatePath } from 'next/cache'

// The sidebar's count badges are rendered by the app layout (AppShellServer),
// which client navigation never re-runs. An action that changes one of those
// counts calls this, so the next render carries the new number.
export function refreshSidebarCounts() {
  revalidatePath('/', 'layout')
}
