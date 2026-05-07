import { createClient } from '@/lib/supabase/server'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { shellStyle, mainStyle } from './layout.styles'

export default async function AppLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div style={shellStyle}>
      <Sidebar userEmail={user?.email} />
      <div style={mainStyle}>
        <TopBar />
        {children}
      </div>
    </div>
  )
}
