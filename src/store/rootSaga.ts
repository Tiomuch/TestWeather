import {all} from 'redux-saga/effects'
import { watcherSaga } from './index'

export default function* rootSaga() {
    yield all([
        watcherSaga()
    ])
}