import React from "react";
import { useDispatch } from "react-redux";

import { api as axios } from "../instance";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../authSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      dispatch(FETCH_START());
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });
      dispatch(FETCH_SUCCESS(response.data.data));
      return response.data.data;
    } catch (err) {
      if (err.response) {
        dispatch(FETCH_FAIL(err.response.data.error));
      } else {
        dispatch(FETCH_FAIL(err));
      }
    }
  };
  return refresh;
};

export default useRefreshToken;
