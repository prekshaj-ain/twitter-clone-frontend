import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../authSlice";

import api from "../instance";

export const createUser = async (user, dispatch) => {
  dispatch(FETCH_START());
  try {
    const response = await api.post("/signup", user);
    dispatch(FETCH_SUCCESS(response.data.data));
    console.log(response);
  } catch (err) {
    dispatch(FETCH_FAIL(err.response.data.message));
  }
};

export const loginUser = async (user, dispatch) => {
  dispatch(FETCH_START());
  try {
    const response = await api.post("/signin", user);
    dispatch(FETCH_SUCCESS(response.data.data));
    console.log(response);
  } catch (err) {
    dispatch(FETCH_FAIL(err.response.data.message));
  }
};
