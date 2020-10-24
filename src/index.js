import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/App'
import * as serviceWorker from './serviceWorker'
import { CarouselProvider } from './context'

const root = document.getElementById('root')

ReactDOM.render(
  <CarouselProvider>
    <App />
  </CarouselProvider>,
  root,
)
serviceWorker.unregister()
