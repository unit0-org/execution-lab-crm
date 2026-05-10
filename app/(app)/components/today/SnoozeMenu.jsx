import { TextButton } from '@/ui/TextButton'
import { InlineForm } from '@/ui/InlineForm'
import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { SNOOZE_PRESETS } from '@/lib/util/snoozePresets'

const PresetButton = ({ preset, action, idValue, idName }) => (
  <InlineForm action={action}>
    <input type="hidden" name={idName} value={idValue} />
    <input type="hidden" name="until" value={preset.value()} />
    <TextButton>{preset.label}</TextButton>
  </InlineForm>
)

export function SnoozeMenu({ action, idValue, idName = 'meeting_id' }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm">Snooze:</Text>
      {SNOOZE_PRESETS.map((p) => (
        <PresetButton key={p.label} preset={p} action={action} idValue={idValue} idName={idName} />
      ))}
    </Inline>
  )
}
