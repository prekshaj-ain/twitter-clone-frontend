import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import NewTweet from "./Components/NewTweet";
import Message from "./Components/Message";
import Profile from "./Components/Profile";
import NewTweet from "./Components/NewTweet";
import Signup from "./Components/Signup";

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
  console.log(background);
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Message />} />
          <Route path="/:user" element={<Profile />} />
          <Route path="compose/tweet" element={<NewTweet />} />
        </Route>
        <Route path="auth" element={<Signup />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="auth" element={<Signup />} />
        </Routes>
      )}
    </>
  );
};

export default App;
