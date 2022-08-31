import React from "react";
import Content from "./Content";

const Contents = ({ contents }) => {
  return (
    <div>
      <h4>Contents페이지</h4>
      {contents.map((data, index) => {
        return <Content data={data} key={index} />;
      })}
    </div>
  );
};

export default Contents;
