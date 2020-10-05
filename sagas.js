import { all, put, takeEvery, fork } from "redux-saga/effects";

export function* helloSaga() {
  yield put({ type: "DECREMENT" });
}

export function* incrementAsync() {
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(watchIncrementAsync), fork(helloSaga)]);
}
