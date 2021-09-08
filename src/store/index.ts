import { createStore, applyMiddleware } from 'redux'
import weather from './reducers/weather'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga/saga'
import 'regenerator-runtime/runtime'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(weather, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store