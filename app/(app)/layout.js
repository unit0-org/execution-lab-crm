import { createClient } from '@/lib/supabase/server'
import { AppShell } from '@/ui/AppShell'
import { Toaster } from '@/ui/Toaster'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { AutoSync } from './components/AutoSync'

export default async function AppLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <Toaster>
      <AppShell sidebar={<Sidebar userEmail={user?.email} />}>
        <TopBar />
        <AutoSync />
        {children}
      </AppShell>
    </Toaster>
  )
}
