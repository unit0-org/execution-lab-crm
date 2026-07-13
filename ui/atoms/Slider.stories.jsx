import { useState } from 'react'
import { Slider } from './Slider'

const OPTIONS = ['xs', 'sm', 'md', 'lg', 'xl']

// The thumb snaps to each stop; onChange receives the picked option.
function SliderDemo() {
  const [value, setValue] = useState('md')

  return <Slider options={OPTIONS} value={value} onChange={setValue} />
}

const meta = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: { layout: 'padded' }
}

export default meta

export const Default = { render: () => <SliderDemo /> }
