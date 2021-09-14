import { createStore, applyMiddleware } from 'redux'
import { weatherReducer } from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../rootSaga'
import 'regenerator-runtime/runtime'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store