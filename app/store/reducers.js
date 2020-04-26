import {combineReducers} from "redux";
import { loading } from "../components/loading/reducer";
import {login} from "../screens/auth/login/reducer";
import {register} from "../screens/auth/register/reducer";
import {forgotPassword} from "../screens/auth/forgotPassword/reducer";
import {navReducer} from "../navigation/AppNavigator";

const appReducers = combineReducers({
  loading,
  login,
  register,
  forgotPassword,
  nav: navReducer,
})

export const rootReducer = (state, action) => {
  return appReducers(state, action)
}