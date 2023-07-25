import React, { useEffect, useState } from "react";
import { api as axios } from "../instance";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../ProfileSlice";

const useFetchProfile = (username) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.Profile[username]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/users/username/${username}`);
      const profileData = response.data.data.user;
      dispatch(addProfile({ username, profileData }));
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (username && !profile) fetchProfile();
  }, [username, profile, dispatch]);

  return { loading, profile, error };
};

export default useFetchProfile;
