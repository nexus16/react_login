import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED
} from "./actions";

const initState = {
  error: null,
  susscess: null,
  username: null
};

export const login = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {...initState};
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}