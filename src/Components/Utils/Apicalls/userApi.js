import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../authSlice";

import { api as axios } from "../instance";

export const createUser = async (user, dispatch) => {
  dispatch(FETCH_START());
  try {
    const response = await axios.post("/signup", user);
    dispatch(FETCH_SUCCESS(response.data.data));
    console.log(response);
  } catch (err) {
    if (err.response) {
      dispatch(FETCH_FAIL(err.response.data.error));
    } else {
      dispatch(FETCH_FAIL(err));
    }
  }
};

export const loginUser = async (user, dispatch) => {
  dispatch(FETCH_START());
  try {
    const response = await axios.post("/signin", user);
    dispatch(FETCH_SUCCESS(response.data.data));
    console.log(response);
  } catch (err) {
    if (err.response) {
      dispatch(FETCH_FAIL(err.response.data.error));
    } else {
      dispatch(FETCH_FAIL(err));
    }
  }
};
