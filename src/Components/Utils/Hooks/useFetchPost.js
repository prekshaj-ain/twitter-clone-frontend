import React, { useEffect, useRef, useState } from "react";
import { api as axios } from "../instance";

const useFetchPost = (apiEndPoint) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const mountedRef = useRef(false);
  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${apiEndPoint}?offset=${page}&limit=10`
      );
      setPosts((prevPosts) => [...prevPosts, ...response.data.data]);
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
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  useEffect(() => {
    if (mountedRef.current) {
      fetchPost();
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        // to avoid the redundant api calls
        if (!loading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return { posts, loading, error };
};

export default useFetchPost;
