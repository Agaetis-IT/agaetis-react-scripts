import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { MuiThemeProvider } from 'material-ui'

import reducers from 'reducers'
import theme from 'theme'
import Routes from 'Routes'
import registerServiceWorker from 'registerServiceWorker'
import './index.css'

const history = createHistory()

const middlewares = [
  routerMiddleware(history),
  thunk,
]

const composeEnhancers = composeWithDevTools({
  // Devtools config
})

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
