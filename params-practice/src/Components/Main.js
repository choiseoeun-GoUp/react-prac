import React from "react";
import Contents from "./Contents";
import Tag from "../UI/Tags";
import InputTag from "./InputTag";

const Main = ({ contents }) => {
  console.log(contents);
  return (
    <div>
      <h3>main페이지</h3>
      <Tag />
      <Contents contents={contents} />
      <InputTag />
    </div>
  );
};

export default Main;
