// this hook is just attaching the interceptors to axiosPrivate instance of axios

import React, { useEffect } from "react";

import { axiosprivate } from "../instance";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const userToken = useSelector((store) => store.Auth.userToken);

  useEffect(() => {
    const requestIntercept = axiosprivate.interceptors.request.use(
      (config) => {
        // first time the request is made
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
      },

      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosprivate.interceptors.response.use(
      (response) => response,

      // if there is error in response
      async (error) => {
        const prevRequest = error?.config;
        // error is 403 then we will add new access token ans again send the request but only once
        if (error?.response?.status === "403" && !prevRequest?.sent) {
          prevRequest.sent = true;
          const { accessToken } = await Refresh();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosprivate(prevRequest);
        } else return Promise.reject(error);
      }
    );

    return () => {
      axiosprivate.interceptors.request.eject(requestIntercept);
      axiosprivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, userToken]);

  return axiosprivate;
};

export default useAxiosPrivate;
