import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { CardGrid } from '@/ui/layout/CardGrid'
import { ToolCard } from './ToolCard'
import { EmptyState } from '@/ui/molecules/EmptyState'

export function ToolsView({ tools }) {
  const empty = 'Tools we’ve shared with you will appear here.'

  if (!tools.length) return <EmptyState title="Tools" message={empty} />

  return (
    <Stack gap="lg">
      <Display size="sm">Tools</Display>
      <CardGrid>
        {tools.map((tool) => (
          <ToolCard key={tool.key} tool={tool} />
        ))}
      </CardGrid>
    </Stack>
  )
}
