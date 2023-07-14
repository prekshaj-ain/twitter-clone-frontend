import React, { useEffect, useRef, useState } from "react";
import { api as axios } from "../instance";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, updatePage } from "../PostsSlice";

const useFetchPost = (apiEndPoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const success = useSelector((store) => store.Posts.success);
  const page = useSelector((store) => store.Posts.page);
  const isMounted = useRef(false);
  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiEndPoint}?page=${page}&limit=10`);
      console.log("new page");
      dispatch(addPosts(response.data.data));
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
    isMounted.current = true;
    if (isMounted.current && !success) {
      fetchPost();
    }
    return () => {
      isMounted.current = false;
    };
  }, [page]);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        // to avoid the redundant api calls
        if (!loading && isMounted.current) {
          dispatch(updatePage());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return { loading, error };
};

export default useFetchPost;
