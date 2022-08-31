import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Content = ({ data }) => {
  const { params } = useParams();
  const navigate = useNavigate();
  const { content, id, questionTitle } = data;
  const goDetail = () => {
    navigate(`/question/${id}`);
  };

  return (
    <div>
      <p>현재페이지는{id}</p>
      <button onClick={goDetail}>{questionTitle}</button>
    </div>
  );
};

export default Content;
