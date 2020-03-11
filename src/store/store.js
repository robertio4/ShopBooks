import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSagas from './sagas'

const initialState = {}

// Crear el middleware de saga
const sagaMiddleware = createSagaMiddleware()

// Montar el store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

// Ejecutamos los sagas
sagaMiddleware.run(rootSagas)

//const action = type => store.dispatch({ type })

export default store
