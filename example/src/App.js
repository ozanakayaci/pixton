import React from 'react'

import { Pixton } from 'pixton'
import 'pixton/dist/index.css'

const App = () => {
  return (
    <div>
      <Pixton type='primary'>Primary Button</Pixton>
      <Pixton type='default'> Default Button </Pixton>
      <Pixton type='dashed'> Dashed Button </Pixton>
      <Pixton type='text'> Text Button </Pixton>
      <Pixton type='link'> Link Button </Pixton>
    </div>
  )
}

export default App
