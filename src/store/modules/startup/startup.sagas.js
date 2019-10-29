import { takeLatest } from 'redux-saga/effects';
import NavigationService from '../../../services/NavigationService';
import { STARTUP } from './startup.actions';

function* startup() {
  // yield put(fetchCoinData());
  NavigationService.navigateAndReset('Main');
}

export function* watchStartup() {
  yield takeLatest(STARTUP, startup);
}
