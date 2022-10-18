import React from "react";
import { Helmet } from "react-helmet";
import CarouselStory from "../components/CarouselStory";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
const Home = () => {
  return (
    <div>
      <div className="flex gap-x-7">
        <div>
          <CarouselStory />
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
