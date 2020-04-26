import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./actions";

const initialState = {
  error: null,
  success: null,
}
export const register = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...initialState };
    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
