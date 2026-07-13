import { Button } from './Button'
import { sizes } from './Button.sizes'
import { Inline } from '../layout/Inline'

// Split out of Button.stories.jsx to stay inside the 30-line file limit.
const meta = {
  title: 'Atoms/Button Sizes',
  component: Button
}

export default meta

export const Sizes = {
  render: () => (
    <Inline align="baseline">
      {Object.keys(sizes).map((size) => (
        <Button key={size} size={size}>{size}</Button>
      ))}
    </Inline>
  )
}

export const Block = {
  args: { tone: 'primary', block: true, children: 'Full width' },
  parameters: { layout: 'padded' }
}
