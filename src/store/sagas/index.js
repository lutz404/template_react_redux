import { all, takeLatest } from "redux-saga/effects";

import { updateUserRequest } from "./user";

export default function* rootSaga() {
  return yield all([takeLatest("UPDATE_USER", updateUserRequest)]);
}
