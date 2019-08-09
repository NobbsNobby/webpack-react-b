// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchDomain } from "models/__DOMAIN__/saga/watchers";

export function* rootSaga() {
  yield all([ call(watchDomain) ]);
}
