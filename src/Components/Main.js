import React from "react";
import Contents from "./Contents";

const Main = ({ contents }) => {
  console.log(contents);
  return (
    <div>
      <h3>main페이지</h3>
      <Contents contents={contents} />
    </div>
  );
};

export default Main;
