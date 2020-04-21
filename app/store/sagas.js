import {all, fork} from "redux-saga/effects";
import { watcherSignInSaga } from "../screens/auth/login/sagas";

export default function* root() {
  yield all([
    fork(watcherSignInSaga)
  ])
}