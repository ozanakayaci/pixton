# pixton

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/pixton.svg)](https://www.npmjs.com/package/pixton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i pixton
```

## Usage

```jsx
import { Pixton } from 'pixton'
import 'pixton/dist/index.css'

function App() {
  return (
    <div>
      <Pixton type='primary'> Primary Button </Pixton>
      <Pixton type='default'> Default Button </Pixton>
      <Pixton type='dashed'> Dashed Button </Pixton>
      <Pixton type='text'> Text Button </Pixton>
      <Pixton type='link'> Link Button </Pixton>
    </div>
  )
}

export default App
```

[DEMO](https://tangible-action.surge.sh/)

## License

MIT © [ozanakayaci](https://github.com/ozanakayaci)
