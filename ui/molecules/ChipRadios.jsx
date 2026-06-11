import { Field } from './Field'
import { ChipRadio } from './ChipRadio'
import { chipsStyle } from './ChipRadios.styles'

// A labelled group of chip radios. `options` are { value, label }; the
// `value` prop preselects one.
export function ChipRadios({ label, name, options, required, hint, value }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <div style={chipsStyle}>
        {options.map((option) => (
          <ChipRadio key={option.value} name={name} value={option.value}
            label={option.label} required={required}
            defaultChecked={option.value === value} />
        ))}
      </div>
    </Field>
  )
}
