import React from "react";
import { Helmet } from "react-helmet";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
const Home = () => {
  return (
    <div>
      <div className="flex gap-x-7">
        <div>
          <Post />
          <Post />
          <Post />
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
    </div>
  );
};

export default Home;
