import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { FeedbackForm } from '@/ui/FeedbackForm'
import { SubmitTextButton } from '@/ui/SubmitTextButton'
import { SNOOZE_PRESETS } from '@/lib/util/snoozePresets'

const PresetButton = ({ preset, action, idValue, idName }) => (
  <FeedbackForm action={action} success={`Snoozed until ${preset.label.toLowerCase()}.`} display="inline">
    <input type="hidden" name={idName} value={idValue} />
    <input type="hidden" name="until" value={preset.value()} />
    <SubmitTextButton>{preset.label}</SubmitTextButton>
  </FeedbackForm>
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
