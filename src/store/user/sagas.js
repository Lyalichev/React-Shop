import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { checkUser, login, logout } from 'services';

import {
  CHECK_USER,
  LOGIN_USER,
  LOGOUT_USER,
  setUser
} from './actions';

function* check() {
  try {
    const user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {}
}

function* loginSaga({data}) {
  try {
    const user = yield login(data);
    yield put(setUser(user));
  } catch (err) {}
}

function* logoutSaga() {
  yield logout();
  yield put(setUser(null));
}

export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER, check),
    takeEvery(LOGIN_USER, loginSaga),
    takeEvery(LOGOUT_USER, logoutSaga),
  ]);
}
