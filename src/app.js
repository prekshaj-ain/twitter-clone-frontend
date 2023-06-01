import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import NewTweet from "./Components/NewTweet";
import Message from "./Components/Message";
import Profile from "./Components/Profile";
import NewTweet from "./Components/NewTweet";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Message />} />
          <Route path="/:user" element={<Profile />} />
          <Route path="compose/tweet" element={<NewTweet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
