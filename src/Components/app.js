import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Body from "./Body";
import Home from "./Home";
import Explore from "./Explore";
import Message from "./Message";
import Profile from "./Profile";
import Signup from "./Signup";
import Login from "./Login";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import NotFound from "./NotFound";
import PersistLogin from "./Utils/PersistLogin";
import Compose from "./Compose";
import SingleTweet from "./SingleTweet";

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <>
      <Routes location={background || location}>
        {/* Public routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Home />} />
            <Route path="tweets" element={<Home />} />
            <Route path="user/:user" element={<Profile />} />
            <Route path="/:author/:tweetId" element={<SingleTweet />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* Protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="messages" element={<Message />} />
              <Route path="Compose/tweet" element={<Compose />} />
            </Route>
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Compose/tweet" element={<Compose />} />
        </Routes>
      )}
    </>
  );
};

export default App;
