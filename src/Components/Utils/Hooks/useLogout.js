import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../authSlice";
import { api as axios } from "../instance";

const useLogout = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    dispatch(LOGOUT());
    try {
      const response = await axios("/logout");
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
