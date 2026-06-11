import { Field } from './Field'
import { RadioCard } from './RadioCard'
import { cardsStyle } from './RadioCards.styles'

// A labelled group of selectable option cards (native radios).
export function RadioCards({ label, name, options, required, hint }) {
  return (
    <Field label={label} required={required} hint={hint}>
      <div style={cardsStyle}>
        {options.map((option) => (
          <RadioCard key={option} name={name} value={option}
            required={required} />
        ))}
      </div>
    </Field>
  )
}
