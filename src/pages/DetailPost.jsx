import React from "react";
import DetailPhoto from "../components/DetailPhoto";

const DetailPost = () => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
        id="container"
      >
        <DetailPhoto />
      </div>
    </div>
  );
};

export default DetailPost;
