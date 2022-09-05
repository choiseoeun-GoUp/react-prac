import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = ({ contents }) => {
  const { id } = useParams();
  console.log(id);
  const [list, setList] = useState([]);
  const domain = "http://localhost:3001/data";
  useEffect(() => {
    fetch(domain + `/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(`에러 캐치 ${e}`);
      });
  }, [id]);
  return (
    <div>
      <h1>디테일페이지</h1>
      <p>{list.questionTitle}</p>
    </div>
  );
};

export default Detail;
