import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from "./actions";

const initialState = {
  error: null,
  success: null,
  email: ""
};

export const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        success: "An email with a recovery link has been sent"
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
