import { TextField } from '@/ui/atoms/TextField'

// The send-hour input. The hour is stored and shown but, under the current
// once-daily cron, the Monday digest sends regardless of the exact hour.
export function DigestFields({ setting }) {
  return (
    <TextField label="Send hour (0–23)" name="send_hour" type="number"
      defaultValue={setting.send_hour} />
  )
}
