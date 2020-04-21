import {combineReducers} from "redux";
import { loading } from "../components/loading/reducer";
import {login} from "../screens/auth/login/reducer";
import {navReducer} from "../navigation/AppNavigator";

const appReducers = combineReducers({
  loading,
  login,
  nav: navReducer,
})

export const rootReducer = (state, action) => {
  return appReducers(state, action)
}