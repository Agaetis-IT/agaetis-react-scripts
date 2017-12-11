import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from 'material-ui'

import configureStore from './configureStore' 
import theme from 'theme'
import Routes from 'Routes'
import registerServiceWorker from 'registerServiceWorker'
import './index.css'

const { store, history } = configureStore() 

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

if (module.hot) { 
  module.hot.accept('./App', () => { 
    ReactDOM.render( 
      <Provider store={store}> 
        <MuiThemeProvider theme={theme}> 
          <ConnectedRouter history={history}> 
            <App /> 
          </ConnectedRouter> 
        </MuiThemeProvider> 
      </Provider>, 
      document.getElementById('root') 
    ) 
  }) 
} 

registerServiceWorker()
