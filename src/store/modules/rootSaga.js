import { all, fork } from 'redux-saga/effects';
import { watchStartup } from './startup/startup.sagas';

export default function* rootSaga() {
  return yield all([fork(watchStartup)]);
}
