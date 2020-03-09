import ax from "../../services/api";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  USER_LOADED,
  USER_LOADING,
  AUTH_LOADING,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS
} from "./Types";

// Check the token and Load User
export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  dispatch(setLoading("user"));
  try {
    let { data } = await ax.get("wp/v2/users/me", await tokenConfig(getState));
    dispatch({
      payload: data,
      type: USER_LOADED
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login the User
export const loginUser = user => async dispatch => {
  dispatch(setLoading("auth"));
  try {
    let { data } = await ax.post("jwt-auth/v1/token", user);
    dispatch({
      payload: data,
      type: LOGIN_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data
    });
  }
};

// Register the User
export const registerUser = user => async dispatch => {
  dispatch(setLoading("auth"));
  try {
    let { data } = await ax.post("/wp/v2/users", user);
    dispatch({
      payload: data,
      type: REGISTER_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Logout User
export const logoutUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Set Loading
export const setLoading = type => {
  return type === "user"
    ? {
        type: USER_LOADING
      }
    : {
        type: AUTH_LOADING
      };
};

// Setup Config with token
export const tokenConfig = async getState => {
  // Get the token from the state
  const token = await getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
