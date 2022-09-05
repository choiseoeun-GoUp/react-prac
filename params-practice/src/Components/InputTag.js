import React, { useState } from "react";
import "../UI/Tags.css";

const InputTag = () => {
  const [tags, setTags] = useState([]); //태그를 담을 배열
  const [tag, setTag] = useState("");
  const removeTag = (i) => {
    const clonetags = tags.slice();
    clonetags.splice(i, 1);
    setTags(clonetags);
  };
  const addTag = (e) => {
    setTag(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  return (
    <>
      <section className="tagBox">
        {tags.map((e, i) => (
          <div key={i} className="Box">
            <div className="tag">
              <span>{e}</span>
              <button onClick={() => removeTag(i)}>x</button>
            </div>
          </div>
        ))}

        <input
          placeholder="Press enter to add tags"
          onChange={(e) => addTag(e)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={tag}
        />
      </section>
    </>
  );
};

export default InputTag;
