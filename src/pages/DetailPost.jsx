import React from "react";
import { useNavigate } from "react-router-dom";
import DetailPhoto from "../components/DetailPhoto";
import Icon from "../components/Icon";

const DetailPost = () => {
  const navigate = useNavigate();
  const handleClose = (e) => {
    if (e.target.id === "container2") {
      navigate(-1);
    }
  };
  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
        id="container2"
        onClick={handleClose}
      >
        <div className="absolute top-0 right-0 p-4">
          <button onClick={() => navigate(-1)}>
            <Icon name="exit" />
          </button>
        </div>
        <DetailPhoto />
      </div>
    </div>
  );
};

export default DetailPost;
