import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Body from "./Body";
import Home from "./Home";
import Explore from "./Explore";
import NewTweet from "./NewTweet";
import Message from "./Message";
import Profile from "./Profile";
import NewTweet from "./NewTweet";
import Signup from "./Signup";
import Login from "./Login";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import NotFound from "./NotFound";
import ExplorePublic from "./ExplorePublic";
/* 
    - App Layout
    - Nav
        - logo
        - navlinks
    - body
        - posts
            -post
            -post
            -post

    - aside section
        
*/

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  console.log(location, background);
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}

          <Route path="/" element={<Body />}>
            <Route path="/" element={<ExplorePublic />} />
            <Route path="/explore" element={<ExplorePublic />} />
            <Route path="user/:user" element={<Profile />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="messages" element={<Message />} />
              <Route path="compose/tweet" element={<NewTweet />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
