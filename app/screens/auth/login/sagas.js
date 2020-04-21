import {takeLatest, call, put} from "redux-saga/effects";
import {SIGN_IN_REQUEST, SIGN_IN_FAILURE, SIGN_IN_SUCCESS} from "./actions";
import {START_LOADING, STOP_LOADING} from "../../../components/loading/actions";
import * as api from "../../../services/auth";
import {AsyncStorage} from "react-native";
import { NavigationActions } from 'react-navigation';

export function* watcherSignInSaga () {
  yield takeLatest(SIGN_IN_REQUEST, workerSignInSaga);
}

function* workerSignInSaga({payload}) {

  try {
    yield call(()=>startLoading());
    const response = yield call(() => signIn(payload));
    if (response.token) {
      yield call(()=> setAccessToken(response.token));
      yield put(NavigationActions.navigate({ routeName: 'Main' }));
      // yield put({
      //   type: SIGN_IN_SUCCESS,
      //   payload: { user: { email} }
      // });
    }
    
  } catch (error) {
    yield put({ type: SIGN_IN_FAILURE, payload: { error: error.message } });
  } finally {
    yield call(() => stopLoading());
  }

}

const signIn =  ({ email, password }) => api.login({email, password})

function* setAccessToken (token) {
  AsyncStorage.setItem('TOKEN_KEY', token);
}
function* startLoading() {
  yield put({
    type: START_LOADING
  });
}
function* stopLoading() {
  yield put({
    type: STOP_LOADING
  });
}