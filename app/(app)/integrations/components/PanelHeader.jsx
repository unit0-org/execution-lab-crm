import { Heading } from '@/ui/Heading'
import { Inline } from '@/ui/Inline'
import { IconButton } from '@/ui/IconButton'

export function PanelHeader({ onClose }) {
  return (
    <Inline gap="md" justify="space-between">
      <Heading gutter="none">Integrations</Heading>
      <IconButton onClick={onClose} label="Close panel">×</IconButton>
    </Inline>
  )
}
