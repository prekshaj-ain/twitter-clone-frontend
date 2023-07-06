import React, { useEffect, useState } from "react";
import useRefreshToken from "./Hooks/useRefreshToken";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const [loading, setLoading] = useState(true);
  const userToken = useSelector((store) => store.Auth.userToken);
  const refresh = useRefreshToken();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    !userToken ? verifyRefreshToken() : setLoading(false);
  }, []);

  return <>{loading ? <p>loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
