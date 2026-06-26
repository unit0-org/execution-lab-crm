import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { CardGrid } from '@/ui/layout/CardGrid'
import { ToolCard } from './ToolCard'
import { ToolsEmpty } from './ToolsEmpty'

export function ToolsView({ tools }) {
  if (!tools.length) return <ToolsEmpty />

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
