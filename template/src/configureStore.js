import { applyMiddleware, createStore } from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension' 
import thunk from 'redux-thunk' 
import { routerMiddleware } from 'react-router-redux' 
import createHistory from 'history/createBrowserHistory' 
 
import rootReducer from './reducers' 
 
const configureStore = () => { 
  const history = createHistory() 
 
  const middlewares = [routerMiddleware(history), thunk] 
 
  const composeEnhancers = composeWithDevTools({}) 
 
  const store = createStore( 
    rootReducer, 
    composeEnhancers(applyMiddleware(...middlewares)) 
  ) 
 
  if (process.env.NODE_ENV !== 'production') { 
    if (module.hot) { 
      module.hot.accept('./reducers', () => { 
        store.replaceReducer(rootReducer) 
      }) 
    } 
  } 
 
  return { history, store } 
} 
 
export default configureStore 
