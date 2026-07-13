import { Field } from './Field'
import { ChipRadio } from './ChipRadio'
import { chipsStyle } from './ChipRadios.styles'

/**
 * Portal chip radios (cohort picker). `options` are `{ value, label }`;
 * `value` preselects one.
 */
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
